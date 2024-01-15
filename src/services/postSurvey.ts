import { FormValues } from "@/components/form";
import axios from "axios";

export const postSurvey = async (values: FormValues) => {
  try {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts/`,
      {
        ...values,
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
