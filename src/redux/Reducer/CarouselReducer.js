import { SET_CAROUSEL } from "../type/CarouselType"

const initialState = {

    listMovie: [{
        "maPhim": 10538,
        "tenPhim": "DORAEMON: NOBITA VÀ CUỘC CHIẾN VŨ TRỤ TÍ HON 2021",
        "biDanh": "doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021",
        "trailer": "https://www.youtube.com/watch?v=bALKXsKhEEs",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021_gp01.jpg",
        "moTa": "Nobita tình cờ gặp được người ngoài hành tinh tí hon Papi, vốn là Tổng thống của hành tinh Pirika, chạy trốn tới Trái Đất để thoát khỏi những kẻ nổi loạn nơi quê nhà. Doraemon, Nobita và hội bạn thân dùng bảo bối đèn pin thu nhỏ biến đổi theo kích cỡ giống Papi để chơi cùng cậu bé. Thế nhưng, một tàu chiến không gian tấn công cả nhóm. Cảm thấy có trách nhiệm vì liên lụy mọi người, Papi quyết định một mình đương đầu với quân phiến loạn tàn ác. Doraemon và các bạn lên đường đến hành tinh Pirika, sát cánh bên người bạn của mình.\r\n",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-05-27T00:00:00",
        "danhGia": 0,
        "hot": true,
        "dangChieu": false,
        "sapChieu": true
    },
    {
        "maPhim": 10539,
        "tenPhim": "MINIONS: SỰ TRỖI DẬY CỦA GRU",
        "biDanh": "minions-su-troi-day-cua-gru",
        "trailer": "https://www.youtube.com/watch?v=dTQXlDV16SY",
        "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/minions-su-troi-day-cua-gru_gp01.jpg",
        "moTa": "Hành trình phiêu lưu của #Gru song hành cùng với #Otto và viên đá của ác nhân MINIONS: SỰ TRỖI DẬY CỦA GRU - DCKC: 2021",
        "maNhom": "GP01",
        "ngayKhoiChieu": "2022-07-01T00:00:00",
        "danhGia": 0,
        "hot": false,
        "dangChieu": false,
        "sapChieu": true
    },]
}

export const CarouselReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CAROUSEL:
            return { ...state, listMovie: action.listMovie }

        default:
            return state
    }
}
