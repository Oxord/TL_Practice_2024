// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call

import { useCallback, useState } from "react";

type FormValues = {
  name: string;
  description: string;
};


export const useForm = () => {

  const [formValues, setFormValues] = useState<FormValues>({ name: "", description: "" });
  
  const onFormValueChange = useCallback(
    (key: string) => (e: React.FormEvent<HTMLInputElement>) => {
      setFormValues({ ...formValues, [key]: e.currentTarget.value });
    },
    [formValues, setFormValues]
  );
  return {
    formValues, onFormValueChange
  }
}

