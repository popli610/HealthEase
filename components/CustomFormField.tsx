/* eslint-disable no-unused-vars */
// import { E164Number } from "libphonenumber-js/core";
import Image from "next/image";
// import ReactDatePicker from "react-datepicker";
import { Control } from "react-hook-form";
// import PhoneInput from "react-phone-number-input";

import { Checkbox } from "./ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "datePicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

interface CustomProps {
  control: Control<any>;
}


const CustomFormField = ({control}: CustomProps) => {

  return (
    <FormField
      control={control}
      name="username"
      render={({ field }) => (
        <FormItem className="flex-1">
          <FormLabel>Username</FormLabel>
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
