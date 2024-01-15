import axios from "axios";

export const getQuestions = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}survey.json`
    );
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
