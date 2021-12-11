import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { initialOncologyVials, OncologyVial, RadiologyVial, Vial, VialTypes } from '../vials'

type SetStateResult<S> = [S, Dispatch<SetStateAction<S>>]

export const useInternalVials = <S extends Vial>(localStorageKey: S['type']): SetStateResult<S[]> => {
  const [vials, setVials] = useState<S[]>(() => {
    const localStorageItem = window.localStorage.getItem(localStorageKey)

    if (!localStorageItem) {
      if (localStorageKey === 'oncology') {
        return initialOncologyVials as S[]
      } else {
        return []
      }
    }

    return JSON.parse(localStorageItem) as S[]
  })

  const hasRunRef = useRef(false)

  useEffect(() => {
    if (hasRunRef.current) {
      window.localStorage.setItem(localStorageKey, JSON.stringify(vials))
    }

    hasRunRef.current = true
  }, [localStorageKey, vials])

  const sortedVials = useMemo(() => {
    return [...vials].sort((a, b) => a.drug.toLowerCase().localeCompare(b.drug.toLowerCase()))
  }, [vials])

  return [sortedVials, setVials]
}

type VialsContextType = {
  vials: { [vialType in keyof VialTypes]: [VialTypes[vialType][], Dispatch<SetStateAction<VialTypes[vialType][]>>] }
}

const VialsContext = createContext<VialsContextType | undefined>(undefined)

export const VialsProvider: FC = ({ children }) => {
  const oncology = useInternalVials<OncologyVial>('oncology')
  const radiology = useInternalVials<RadiologyVial>('radiology')

  const value = useMemo((): VialsContextType => {
    return {
      vials: {
        oncology,
        radiology,
      },
    }
  }, [oncology, radiology])

  return <VialsContext.Provider value={value}>{children}</VialsContext.Provider>
}

export const useVials = <Type extends keyof VialTypes>(type: Type): SetStateResult<VialTypes[Type][]> => {
  const context = useContext(VialsContext)

  if (!context) {
    throw new Error('Missing context')
  }

  // @ts-expect-error Could not figure this out
  return context.vials[type]
}
