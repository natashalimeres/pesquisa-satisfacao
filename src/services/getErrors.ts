import axios from "axios";

export const getErrors = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}survey-post-error.json`
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
