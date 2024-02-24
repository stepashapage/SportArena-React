import tg from "../../img/img_SportArena/1-header/tg.svg";
import github from "../../img/img_SportArena/1-header/github.svg";
import facebook from "../../img/img_SportArena/1-header/facebook.svg";
import close from "../../img/img_SportArena/1-header/close.svg";

import "../header/Header.scss";
import { Transition } from "react-transition-group";

export default function RegistrModal({ isOpen, onClose }) {
    return (
        <>
            <Transition in={isOpen} timeout={500} unmountOnExit={true}>
                {(state) => (
                    <div
                        className={`registrMenu registrMenu--${state}`}
                        id="registrWindow"
                    >
                        <div className="registrMenu__Modal">
                            <button
                                className="registrMenu__Modal-close"
                                id="closeRegistrWindow"
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                <img src={close} />
                            </button>

                            <div className="registrMenu__Modal-SignIn">
                                <h1 className="SignIn-title">Авторизация</h1>

                                <div className="SignIn-Social">
                                    <form
                                        action=""
                                        className="SignIn-Social_cont"
                                    >
                                        <button className="Social_cont-btn">
                                            <img src={tg} />
                                        </button>
                                    </form>

                                    <form
                                        action=""
                                        className="SignIn-Social_cont"
                                    >
                                        <button className="Social_cont-btn">
                                            <img src={github} />
                                        </button>
                                    </form>

                                    <form
                                        action=""
                                        className="SignIn-Social_cont"
                                    >
                                        <button className="Social_cont-btn">
                                            <img src={facebook} />
                                        </button>
                                    </form>
                                </div>

                                <form action="" className="SignIn-formReg">
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Password" />
                                    <button>Войти</button>
                                </form>

                                <div className="SignIn-forget">
                                    <a href="#">Забыли свой пароль?</a>
                                </div>
                            </div>

                            <div className="registrMenu__Modal-SignUp">
                                <h1 className="SignUp-title">
                                    Добро пожаловать на официальный сайт
                                    спортивного центра Vivi Fuel Арена
                                </h1>

                                <div className="SignIn-desc">
                                    <a href="#">Впервые на нашем сайте ?</a>
                                </div>

                                <form action="" className="SignUp-formReg">
                                    <button className="SignUp-btnRegistr">
                                        Регистрация
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </>
    );
}
