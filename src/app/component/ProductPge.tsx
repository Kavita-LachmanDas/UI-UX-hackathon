
// import styles from "../styles/ProductPage.module.css";
import ImageGallery from "./ImageGallery";

const ProductPage = () => {
  return (
    <div className='container'>
      <div className='breadcrumb'>
        <span>Home</span> &gt; <span>Shop</span> &gt; <span>Asgaard sofa</span>
      </div>
      <div className={'productSection'}>
        <ImageGallery />
        <div className={'details'}>
          <h1>Asgaard Sofa</h1>
          <p className={'price'}>Rs. 250,000.00</p>
          <div className={'rating'}>
            <span>⭐⭐⭐⭐☆</span>
            <p>5 Customer Review</p>
          </div>
          <p className={'description'}>
            Setting the bar as one of the loudest speakers in its class, the Kilburn is
            a compact, stout-hearted hero with well-balanced audio, boosting a clear midrange
            and extended highs for a sound.
          </p>
          <div className={'options'}>
            <div className={'size'}>
              <p>Size:</p>
              <button>L</button>
              <button>XL</button>
              <button>XS</button>
            </div>
            <div className={'color'}>
              <p>Color:</p>
              <span className={'colorOption'} style={{ backgroundColor: "#8b6bbd" }}></span>
              <span className={'colorOption'} style={{ backgroundColor: "#000" }}></span>
              <span className={'colorOption'} style={{ backgroundColor: "#d1b282" }}></span>
            </div>
          </div>
          <div className={'cart'}>
            <input type="number" defaultValue={1} min={1} />
            <button>Add To Cart</button>
          </div>
          <div className={'meta'}>
            <p>SKU: SS001</p>
            <p>Category: Sofas</p>
            <p>Tags: Sofa, Chair, Home, Shop</p>
          </div>
        </div>
      </div>
      <div className={'descriptionSection'}>
        <h2>Description</h2>
        <p>
          Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker
          takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
