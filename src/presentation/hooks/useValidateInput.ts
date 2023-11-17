import { useEffect, useState } from "react"
import {
  validateDescription,
  validateID,
  validateLogo,
  validateName,
} from "@presentation/utils/Validations"

export enum InputType {
  Id = "id",
  Name = "name",
  Description = "description",
  Logo = "logo",
}

export const useValidateInput = (
  input: string,
  type: string,
  required: boolean,
  isFocused: boolean,
) => {
  const [error, setError] = useState<string | null>(null)
  const [warning, setWarning] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const validateInput = () => {
    if (type === InputType.Id) {
      validateID({ input, setWarning, setError, required, isFocused, setLoading })
    }
    if (type === InputType.Name) {
      validateName({
        input,
        setWarning,
        setError,
        required,
        isFocused,
        setLoading,
      })
    }
    if (type === InputType.Description) {
      validateDescription({
        input,
        setWarning,
        setError,
        required,
        isFocused,
        setLoading,
      })
    }
    if (type === InputType.Logo) {
      validateLogo({
        input,
        setWarning,
        setError,
        required,
        isFocused,
        setLoading,
      })
    }
  }

  useEffect(() => {
    validateInput()
  }, [input, type])

  return { error, warning, loading }
}
