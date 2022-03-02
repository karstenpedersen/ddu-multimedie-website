import Image from "next/image";
import { FunctionComponent } from "react"

interface Props {
  title: string;
  description: string;
  image: StaticImageData;
}
/*

*/
const Card: FunctionComponent<Props> = (props) => {
  const { title, description, image } = props;

  return (
    <div className="bg-white shadow-lg rounded h-[300px] overflow-hidden hover:scale-105 transition-all duration-200">
      <div className="h-[75%] w-full relative">
        <Image src={image} alt="Image" layout="fill" className="object-cover" />
      </div>

      <div className="p-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card;