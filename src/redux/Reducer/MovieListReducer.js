import { FILM_INFOR_ADMIN, GET_MOVIE_LIST, MOVIE_CALENDER_INFOR, SET_AVAILABLE_FILM, SET_COMMING_FILM } from "../type/MovieManagerType"

const initialState = {
    movieList: [{
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    }, {
        "maPhim": 10534,
        "tenPhim": "PHÙ THỦY TỐI THƯỢNG TRONG ĐA VŨ TRỤ HỖN LOẠN",
        "biDanh": "phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan",
        "trailer": "https://www.youtube.com/watch?v=aWzlQ2N6qqg",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/phu-thuy-toi-thuong-trong-da-vu-tru-hon-loan_gp01.jpg",
        "moTa": "Sau các sự kiện của Avengers: Endgame, Tiến sĩ Stephen Strange tiếp tục nghiên cứu về Viên đá Thời gian. Nhưng một người bạn cũ đã trở thành kẻ thù tìm cách tiêu diệt mọi phù thủy trên Trái đất, làm xáo trộn kế hoạch của Strange và cũng khiến anh ta mở ra một tội ác khôn lường.",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-04T00:00:00",
        "danhGia": 10,
        "hot": true,
        "dangChieu": true,
        "sapChieu": false
    },],
    arrFilmDefault: [],
    filmDetails: {
        "heThongRapChieu": [
            {
                "cumRapChieu": [
                    {
                        "lichChieuPhim": [
                            {
                                "maLichChieu": "45703",
                                "maRap": "833",
                                "tenRap": "Rạp 3",
                                "ngayChieuGioChieu": "2022-05-01T01:50:00",
                                "giaVe": 90000,
                                "thoiLuong": 120
                            }
                        ],
                        "maCumRap": "lotte-cong-hoa",
                        "tenCumRap": "Lotte - Cộng Hòa",
                        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
                        "diaChi": "L4-Pico Plaza, 20 Cộng Hòa, Tân Bình"
                    },
                    {
                        "lichChieuPhim": [
                            {
                                "maLichChieu": "45703",
                                "maRap": "833",
                                "tenRap": "Rạp 3",
                                "ngayChieuGioChieu": "2022-05-01T01:50:00",
                                "giaVe": 90000,
                                "thoiLuong": 120
                            }
                        ],
                        "maCumRap": "lotte-cong-hoa",
                        "tenCumRap": "Lotte - Cộng Hòa",
                        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
                        "diaChi": "L4-Pico Plaza, 20 Cộng Hòa, Tân Bình"
                    }
                ],
                "maHeThongRap": "LotteCinima",
                "tenHeThongRap": "Lotte Cinema",
                "logo": "http://movieapi.cyberlearn.vn/hinhanh/lotte-cinema.png"
            }
        ],
        "maPhim": 10535,
        "tenPhim": "NGHỀ SIÊU DỄ",
        "biDanh": "nghe-sieu-de",
        "trailer": "https://www.youtube.com/watch?v=IOwvN-aoBpM",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/nghe-sieu-de_gp01.jpg",
        "moTa": "Ông Thái là một cảnh sát về hưu nhưng không chịu an phận thủ thường, hàng ngày vẫn đi tìm bắt tội phạm vặt trong xóm cho đỡ nhớ nghề. Một ngày kia, Hoàng - tên trùm ma túy mới ra tù bỗng dưng chuyển đến xóm ông và mở một văn phòng bất động sản. Nghi ngờ đây là nơi làm ăn phi pháp, ông Thái quyết định âm thầm điều tra. Ông mua lại tiệm cơm tấm đối diện trụ sở của Hoàng để làm nơi theo dõi, đồng thời thu nạp Thu - Phú - Vinh - Mèo, đám thanh niên “bất hảo” trong xóm về quán hỗ trợ buôn bán để rảnh tay \"phá án\". Trớ trêu thay, tiệm cơm bất ngờ nổi tiếng và ăn nên làm ra, khiến cho \"chuyên án đặc biệt\" của ông đứng trước nguy cơ đổ bể.",
        "maNhom": "GP01",
        "hot": true,
        "dangChieu": true,
        "sapChieu": false,
        "ngayKhoiChieu": "2022-04-29T00:00:00",
        "danhGia": 9
    },
    filmDetailsForAdmin: {}
}

export const MovieListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_LIST: {
            return { ...state, movieList: action.movieList, arrFilmDefault: action.movieList }
        }
        case SET_AVAILABLE_FILM:
            return { ...state, movieList: state.arrFilmDefault.filter(film => film.dangChieu === true) }

        case SET_COMMING_FILM: return { ...state, movieList: state.arrFilmDefault.filter(film => film.sapChieu === true) }
        case MOVIE_CALENDER_INFOR: return { ...state, filmDetails: action.filmDetails }
        case FILM_INFOR_ADMIN: return { ...state, filmDetailsForAdmin: action.filmDetailsForAdmin }
        default:
            return { ...state }
    }
}
