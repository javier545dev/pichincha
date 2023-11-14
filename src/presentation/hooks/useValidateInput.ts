import { useEffect, useState } from "react"
import { GetValidateId } from "@domain/useCases/products/ValidateId"

export const useValidateInput = (
  input: string,
  type: string,
  required: boolean,
  isFocused: boolean,
) => {
  const [error, setError] = useState<string | null>(null)
  const [warning, setWarning] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const validateID = async () => {
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
        setWarning(null)
        return
      }

      setLoading(false)
      setError("ID no valido")
      setWarning(null)
      return
    }

    return setError(null)
  }

  const validateName = () => {
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
      setWarning(null)
      return
    }

    return setError(null)
  }

  const validateDescription = () => {
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
      setWarning(null)
      return
    }

    return setError(null)
  }

  const validateLogo = () => {
    if (input === "" && required && !isFocused) {
      setError(null)
      return setWarning("Logo is required")
    }

    if (input !== "" && isFocused) {
      setError(null)
      setWarning(null)
      return
    }

    return setError(null)
  }

  const validateInput = () => {
    if (type === "id") {
      validateID()
    }
    if (type === "name") {
      validateName()
    }
    if (type === "description") {
      validateDescription()
    }
    if (type === "logo") {
      validateLogo()
    }
  }

  useEffect(() => {
    validateInput()
  }, [input, type])

  return { error, warning, loading }
}
