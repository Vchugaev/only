import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

export interface AppProps {
    count: number;
}

export default function Slider(props: AppProps) {

    const [delayedCount, setDelayedCount] = useState(props.count)

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedCount(props.count);
        }, 300);

        return () => clearTimeout(timer);
    }, [props.count]);


    switch (delayedCount) {
        case 1:
            return (
                <>
                    <div className='slider__box'>
                        <button className='arrow-left' />
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={80}

                            breakpoints={
                                {
                                    0: {
                                        slidesPerView: 1.4,
                                        spaceBetween: 20,
                                        slidesPerGroup: 1

                                    },
                                    850: {
                                        slidesPerView: 3,
                                        spaceBetween: 80
                                    }
                                }
                            }
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left", disabledClass: '.arrow-disable', }}
                            pagination
                        >
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2011</h3>
                                    <p className='slider__slide__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='arrow-right' />
                    </div>
                </>
            )
        case 2:
            return (
                <>
                    <div className='slider__box'>
                        <button className='arrow-left' />
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={80}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left", disabledClass: '.arrow-disable', }}
                        >
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2012</h3>
                                    <p className='slider__slide__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='arrow-right' />
                    </div>
                </>
            )
        case 3:
            return (
                <>
                    <div className='slider__box'>
                        <button className='arrow-left' />
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={80}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left", disabledClass: '.arrow-disable', }}
                        >
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2013</h3>
                                    <p className='slider__slide__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='arrow-right' />
                    </div>
                </>
            )
        case 4:
            return (
                <>
                    <div className='slider__box'>
                        <button className='arrow-left' />
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={80}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left", disabledClass: '.arrow-disable', }}
                        >
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2014</h3>
                                    <p className='slider__slide__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='arrow-right' />
                    </div>
                </>
            )
        case 5:
            return (
                <>
                    <div className='slider__box'>
                        <button className='arrow-left' />
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={80}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left", disabledClass: '.arrow-disable', }}
                        >
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2015</h3>
                                    <p className='slider__slide__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='arrow-right' />
                    </div>
                </>
            )
        case 6:
            return (
                <>
                    <div className='slider__box'>
                        <button className='arrow-left' />
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={80}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left", disabledClass: '.arrow-disable', }}
                        >
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='arrow-right' />
                    </div>
                </>
            )
        default:
            return (
                <>
                    <div className='slider__box'>
                        <button className='arrow-left' />
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={80}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left", disabledClass: '.arrow-disable', }}
                        >
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2015</h3>
                                    <p className='slider__slide__description'>13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2016</h3>
                                    <p className='slider__slide__description'>Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slider__slide'>
                                    <h3 className='slider__slide__heading'>2017</h3>
                                    <p className='slider__slide__description'>Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button className='arrow-right' />
                    </div>
                </>
            )
    }

}