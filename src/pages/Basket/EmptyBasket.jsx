import emptyCart from "../../img/img_Basket/empty-cart.png";

export default function EmptyBasket() {
    return (
        <>
            <div className="cart cart--empty">
                <h2>
                    Корзина пустая <icon>😕</icon>
                </h2>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу.
                    <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <img src={emptyCart} alt="Empty cart" />
                <a href="/" className="button button--black">
                    <span>Вернуться назад</span>
                </a>
            </div>
        </>
    );
}
