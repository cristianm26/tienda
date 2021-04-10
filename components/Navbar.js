import Link from 'next/link'
import Image from 'next/image'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
const Navbar = () => {
    return (
        <div>
            <Link href="/">
                <a>
                    <Image
                    src="/images/amazon.png"
                    width={100}
                    height={100}
                    objectFit="position"
                    objectPosition="center"
                    />
                </a>
            </Link>
            <ul>
                <li><Link href="/login"><a>Login</a></Link></li>
                <li><Link href="/signup"><a>SignUp</a></Link></li>
                <li><Link href="/checkout"><a><AddShoppingCartIcon fontSize="large" /></a></Link></li>
            </ul>
            <style jsx>{`
            
            div {
                display:flex;
                align-items: center;
                justify-content: space-between;
                background-color: lightgray;
                position: sticky;
                top: 0;
                left:0;
                right:0;
            }
            ul{
                display:flex;
                margin-right: 2rem;    
                list-style-type: none; 
            }
            li:hover{
                text-decoration: underline;
            }
            a{
                margin-left: 1rem;
                text-decoration:none;
                color: #000;
            }
            `}</style>
        </div>
    )
}

export default Navbar

