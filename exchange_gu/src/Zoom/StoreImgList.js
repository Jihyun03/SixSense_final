import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./StoreImgList.css"

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'

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
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=49601"><i className="fa fa-instagram"></i></a></li>
                        {/* <li><a href="#"><i className="fa fa-twitter"></i></a></li> */}
                        <li><a href="https://movie-phinf.pstatic.net/20111223_259/1324586767032sAWKl_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20111223_260/1324586766465uB2Ek_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>아이들<span className="job-title">2008</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://img.wkorea.com/w/2020/09/style_5f678edebbfc6-539x700.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href=""><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=54455"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20111223_82/1324633011203EMtFJ_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20111223_105/1324586934177Qb5CB_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
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
                        <li><a href="https://img.extmovie.com/files/attach/images/135/755/434/067/6686c97a12efbb0c73b3d9a2fa8f2bf4.jpg" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20111223_78/1324586791673QCOQf_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>김씨 표류기<span className="job-title">2009</span></h2>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="http://storage.enuri.info/pic_upload/knowbox_rss/202109/aHR0cDovL2ltZy50Zi5jby5rci9hcnRpY2xlL2hvbWUvMjAyMS8wOS8yMy8yMDIxNzQ4MDE2MzIzNzQ2NDUuanBn" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://movie.naver.com/movie/bi/mi/basic.naver?code=86502"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20111223_18/1324641462767HdFSE_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20111223_264/1324642733751ybNRv_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>거북이들<span className="job-title">2011</span></h2>
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
                        <li><a href="https://movie-phinf.pstatic.net/20170424_181/14929980897465NwlX_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20170424_102/1492998375390CDaiP_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
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
                        <li><a href="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MjlfMjAg/MDAxNTk1OTkxMDQ3MDc4.mG7AaIS0gmFWw_2SXYWlLUzke7S8Sy5sVCpO0MPFseEg.gKOXIya3Q4W3Fe7UpQwYnipyLGdnOb-8se-PFc2JtyQg.JPEG.cine_play/movie_image_(1).jpg?type=w800"  onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://newsimg.sedaily.com/2020/07/21/1Z5E1C4VM1_1.jpg" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
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
                        <li><a href="https://movie-phinf.pstatic.net/20210617_33/1623893764803wD8Oz_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://movie-phinf.pstatic.net/20210819_294/1629336030405v7C7b_JPEG/movie_image.jpg?type=m886_590_2" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
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
                        <li><a href="https://pbs.twimg.com/media/E7NerIAVEAA5bDA.jpg" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://newsimg.hankookilbo.com/cms/articlerelease/2021/07/20/7e6de036-9a8a-4476-b4b3-02c73f921ee0.jpg" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
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
                        <li><a href="https://entertainimg.kbsmedia.co.kr/cms/uploads/BBSIMAGE_20210905125821_6db11ff910bb2b416186698058c5909d.jpg" onClick={<Zoom/>}><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://post-phinf.pstatic.net/MjAyMTA4MjZfMTQ4/MDAxNjI5OTU5ODExNTEz.FhWyj85rWfYSGbKY3PjCShjVwwfvWpymptp0PgfUR9Ig.8ENmCsKAKKh2JuZLDi4KmK81LqmkmFQpqCXlwIim-bsg.JPEG/12.IMG_3768.jpg?type=w1200" onClick={<Zoom/>}><i className="fa fa-dribbble"></i></a></li>
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
                        <h2>이상한 변호사 우영우<span className="job-title">2022</span></h2>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default StoreImgList;