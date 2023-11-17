import { GetValidateId } from "@domain/useCases/products/ValidateId"
import { Dispatch, SetStateAction } from "react"

interface Props {
  input: string
  setWarning: (warning: string | null) => void
  setError: (error: string | null) => void
  required: boolean
  isFocused: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}
export const validateID = async ({
  input,
  setWarning,
  setError,
  required,
  isFocused,
  setLoading,
}: Props): Promise<void> => {
  if ((input !== "" && input.length < 3) || input.length > 100) {
    setWarning(null)
    return setError("ID must be between 3 and 100 characters long")
  }

  if (required && input.length === 0) {
    setError(null)
    return setWarning("ID is required")
  }

  if (isFocused) {
    setLoading(true)
    setError(null)
    setWarning(null)
    const response = await GetValidateId(input)
    if (response === false) {
      setLoading(false)
      setError(null)
      return setWarning(null)
    }

    setLoading(false)
    setWarning(null)
    return setError("ID no valido")
  }

  return setError(null)
}

export const validateName = ({ input, setWarning, setError, required, isFocused }: Props) => {
  if (input !== "" && (input.length < 5 || input.length > 100)) {
    setWarning(null)
    return setError("Name must be between 5 and 100 characters long")
  }

  if (required && input.length === 0) {
    setError(null)
    return setWarning("Name is required")
  }

  if (input !== "" && isFocused) {
    setError(null)
    return setWarning(null)
  }

  return setError(null)
}

export const validateDescription = ({
  input,
  setWarning,
  setError,
  required,
  isFocused,
}: Props) => {
  if (input !== "" && (input.length < 5 || input.length > 200)) {
    setWarning(null)
    return setError("Description must be between 5 and 200 characters long")
  }

  if (required && input.length === 0) {
    setError(null)
    return setWarning("Description is required")
  }

  if (input !== "" && isFocused) {
    setError(null)
    return setWarning(null)
  }

  return setError(null)
}

export const validateLogo = ({ input, setWarning, setError, required, isFocused }: Props) => {
  if (input === "" && required && !isFocused) {
    setError(null)
    return setWarning("Logo is required")
  }

  if (input !== "" && isFocused) {
    setError(null)
    return setWarning(null)
  }

  return setError(null)
}
