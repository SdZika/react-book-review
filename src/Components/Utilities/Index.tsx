import img1 from './images/img1.webp'
import img2 from './images/img2.webp'
import img3 from './images/img3.webp'
import img4 from './images/img4.webp'
import img5 from './images/img5.webp'
import img6 from './images/img6.webp'
import img7 from './images/img7.webp'
import img8 from './images/img8.webp'
import img9 from './images/img9.webp'
import img10 from './images/img10.webp'
import img11 from './images/img11.webp'
import img12 from './images/img12.webp'
import img13 from './images/img13.webp'
import img14 from './images/img14.webp'
import img15 from './images/img15.webp'
import img16 from './images/img16.webp'
import img17 from './images/img17.webp'
import img18 from './images/img18.webp'
import img19 from './images/img19.webp'
import img20 from './images/img20.webp'
import img21 from './images/img21.webp'

import './Index.styles.css'



export const MyObject = () => {
    let books = [
        { id: 1, image: img1, title: "Swan Song", author: "Elin Hilderbrand" },
        { id: 2, image: img2, title: "Onix Storm", author: "Rebecca Yarros" },
        { id: 3, image: img3, title: "Not in Love", author: "Ali Hazelwood" },
        { id: 4, image: img4, title: "Learher & Lark", author: "Brynne Weaver" },
        { id: 5, image: img5, title: "Reckless", author: "Lauren Roberts" },
        { id: 6, image: img6, title: "Good Energy", author: "Casey Means MD" },
        { id: 7, image: img7, title: "Zodiac Academy", author: "Caroline Peckham" },
        { id: 8, image: img8, title: "The Women", author: "Kristin Hannah" },
        { id: 9, image: img9, title: "Murdle", author: "G. T. Karber" },
        { id: 10, image: img10, title: "Skyshade", author: "Alex Aster" },
        { id: 11, image: img11, title: "You Like It Darker", author: "Stephen King" },
        { id: 12, image: img12, title: "Let's Find Pokemon", author: "Kazunori Aihara" },
        { id: 13, image: img13, title: "Eruption", author: "Michael Crichton" },
        { id: 14, image: img14, title: "Misfits", author: "Lisa Yee" },
        { id: 15, image: img15, title: "I lived inside a whale", author: "Xin Li" },
        { id: 16, image: img16, title: "Shameless", author: "Brian Tyler Cohen" },
        { id: 17, image: img17, title: "Haunting Adeline", author: "H. D. Carlton" },
        { id: 18, image: img18, title: "A Demon of Unrest", author: "Erik Larson" },
        { id: 19, image: img19, title: "Bits and Pieces", author: "Whoopi Goldberg" },
        { id: 20, image: img20, title: "An Offer", author: "Julia Quinn" },
        { id: 21, image: img21, title: "Powerful", author: "Lauren Roberts" },
      ];
      
    
const bookList = books.map((book) => (
    <ul key={book.id}>
      <li><img src={book.image} alt={book.title} /></li>
      <li>{book.title}</li>
      <li>{book.author}</li>
      <li><button>Add to Favorites</button></li>
    </ul>
  ));

return (
    <div className='bookGrid'>{bookList}</div>
  );
    
}