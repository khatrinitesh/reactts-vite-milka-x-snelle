import axios from "axios";

export const handleDownload = async (videoUrl: string, name: string) => {
  try {
    const response = await axios.get(videoUrl, { responseType: "blob" });

    if (response.status === 200) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Song voor ${name}.mp4`);
      document.body.appendChild(link);
      link.click();
    } else {
      console.error("Unexpected response status:", response.status);
    }
  } catch (e) {
    console.log(e);
  }
};
