import style from "./healtyComponent.module.css";
import Image from "next/image";
import FoodGirlImg from "./images/FoodImg.png";
function HealthyFoodComponent() {
  return (
    <div className={style.mainFoodWrap}>
      <div className={style.foodContentWrap}>
        <div className={style.imgComponentWrap}>
          <div className={style.imgWrap}>
            <Image src={FoodGirlImg} alt="" />
          </div>
        </div>
        <div className={style.textContentWrap}>
          <h1 className={style.Tittle}>Healthy nutrition is the Foundation for a healthy life</h1>
          <p className={style.Paragraph}>
            Nutrition is important at every age. Your children need proper nutrients stay healthy
            and strong, and grow up healthy and strong. Nutrition for children can also help
            establish a foundation for healthy eating habits and nutritional knowledge that your
            child can apply throughout life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HealthyFoodComponent;
