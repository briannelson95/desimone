import Link from "next/link";
import Image from 'next/image';
import urlFor from "@/lib/urlFor";

type Props = {
    navigation: Navigation[];
    image: Image;
}

const Footer = ({navigation, image}: Props) => {
    return (
        <footer className="hidden mt-6 px-10 py-4 pb-6 2xl:mx-52 lg:flex flex-col items-center">
            <hr className="w-4/5 pb-16" />
            <nav className="mb-8 w-full">
                <ul className='flex items-center mx-6 lg:mx-4'>
                    <li className="first:mr-auto">
                        <Link
                            href={'/'}
                            className=""
                        >
                            <Image 
                                src={urlFor(image).url()}
                                height={122}
                                width={122}
                                alt={'logo.alt'}
                            />
                        </Link>
                    </li>
                    {navigation.map((item, index) => (
                        <li key={index} className="px-8">
                            <Link 
                                key={index} 
                                href={`/${item.slug.current}`}
                                
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="text-center">
                Website Developed by <a className="underline" href="https://www.briannelson.dev/" target="_blank" rel="noreferrer">Brian Nelson</a>
            </div>
        </footer>
    );
}
 
export default Footer;
