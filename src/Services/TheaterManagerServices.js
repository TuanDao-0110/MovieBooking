import { GroupId } from "../utilities/Setting/config";
import { baseService } from "./BaseServices";

class TheaterManagerServices extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }
    inforCalenderTheather() {
        return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GroupId}`)
    }
    infoMovieCalender(movieId) {
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`)
    }
    inforWholeStateSystem() {
        return this.get('QuanLyRap/LayThongTinHeThongRap')
    }
    inforStateLocation(stateId) {
        return this.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${stateId}`)
    }
}


export const theaterManagerServices = new TheaterManagerServices()