import phone from "../../public/icon-app.svg"
import design from "../../public/icon-design.svg"
import dev from "../../public/icon-dev.svg"

export type blogProps = {
  title: string;
  image: string;
  date: string;
  url: string;
  available: boolean;
};

export const blogDetails = [
  {
    title: "SVT-AV1",
    image: dev,
    date: "Open source video encoder",
    url: "https://gitlab.com/AOMediaCodec/SVT-AV1",
    available: true,
  },
  {
    title: "FastHash",
    image: design,
    date: "Hash personal data in a secure way",
    url: "https://securehash.streamlit.app/Hashing_Page",
    available: true,
  },
  {
    title:
      "AutoInsta",
    image: phone,
    date: "Instagram automation using python",
    url: "",
    available: false,
  },
];
