import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./StoreImgList.css"


function StoreImgList() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://img.marieclairekorea.com/2022/01/mck_61d3d762d7da1.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=49601#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>아이들<span className="job-title">2008</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="http://storage.enuri.info/pic_upload/knowbox_rss/202109/aHR0cDovL2ltZy50Zi5jby5rci9hcnRpY2xlL2hvbWUvMjAyMS8wOS8yMy8yMDIxNzQ4MDE2MzIzNzQ2NDUuanBn" />
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=54455"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>죽기 직전 그들<span className="job-title">2008</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://img.insight.co.kr/static/2020/07/24/700/f838737ch3x8y6hk096p.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=44910"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>김씨 표류기<span className="job-title">2009</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://img.wkorea.com/w/2020/09/style_5f678edebbfc6-539x700.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=52331"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>남매의 집 <span className="job-title">2010</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://dimg.donga.com/wps/SPORTS/IMAGE/2022/04/28/113138467.1.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=154980"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>꿈의 제인<span className="job-title">2017</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://post-phinf.pstatic.net/MjAyMTEwMTNfMTg2/MDAxNjM0MTE1NTc5OTA1.UhOtwi0x9u5gM8a2LTMHpDJRzW44y29szMSfbvVOD4sg.tcKRYgUC3uh3_uBbBFDBIo2S45OVhSLUAK0CJelhegkg.JPEG/NM_07717.jpg?type=w1200" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=185917"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>반도<span className="job-title">2020</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://image.news1.kr/system/hp/2022/4/27/5339999" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=192150"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>모가디슈<span className="job-title">2021</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://img.marieclairekorea.com/2021/09/mck_614bc9ee1194e.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.netflix.com/kr/title/81312457"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>킹덤:아신전<span className="job-title">2021</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://img.marieclairekorea.com/2021/10/mck_615fa539b75eb.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.netflix.com/kr/title/81280917"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>DP<span className="job-title">2021</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MDJfOTUg%2FMDAxNjUxNDU3OTUzNjI3.C2TWD7s26Nw0birW8tJ2w5Vfuyytl71SkXb404NhYy4g.wJ4L4J-1t9wW67Xh7dJrPV5Zxc0HXARLudsjXMRcE54g.JPEG.foretwon%2F%25B9%25D9%25C0%25DA_%25B8%25C5%25B0%25C5%25C1%25F8_4%25BF%25F9%25C8%25A3_-_%25B1%25B8%25B1%25B3%25C8%25AF_%2528%25BC%25BE%25C6%25BC%25B8%25DB_%25C0%25CC%25BE%25EE%25C4%25BF%25C7%25C1%2529_%25282%2529.jpg&type=sc960_832" />
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.netflix.com/kr/title/81518991?source=naver"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>이상한 변호사 우영우<span className="job-title">2023</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default StoreImgList;