import axios from "axios";

export const getWeather = async (address) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/search",
      {
        address: address,
      },
      config
    );
    if (!data) {
      throw new Error("error in searching");
    }
    return data;
  } catch (error) {
    return error;
  }
};
