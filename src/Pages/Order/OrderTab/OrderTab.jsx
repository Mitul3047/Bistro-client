import FoodCard from "../../../components/FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({items}) => {

    // const pagination = {
    //     clickable: true,
    //     renderBullet: function (index, className) {
    //         return '<span class="' + className + '">' + (index + 1) + "</span>";
    //     }
    // }
    return (
        <div className=' mt-20 grid md:grid-cols-3 gap-5'>
        {
           items.map(item => <FoodCard key={item._id}
           item={item}>
               
           </FoodCard>)
          }
        </div>
    );
};

export default OrderTab;