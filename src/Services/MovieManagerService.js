/* eslint-disable no-useless-constructor */
import { GroupId } from "../utilities/Setting/config";
import { baseService } from "./BaseServices";

class MovieManagerServices extends baseService {
    constructor() {
        super()
    }
    getMovieBanner() {
        return this.get('QuanLyPhim/LayDanhSachBanner')
    }
    getMovieList() {
        return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GroupId}`)
    }
    uploadPhim(formData) {
        return this.post('QuanLyPhim/ThemPhimUploadHinh', formData)
    }
    inforFilmForAdmin(filmId) {
        return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${filmId}`)
    }
    updateFilmForAdmin(filmModel) {
        return this.post('QuanLyPhim/CapNhatPhimUpload', filmModel)
    }
    deleteFilmAdmin(FilmId) {
        return this.delete(`QuanLyPhim/XoaPhim?=${FilmId}`)
    }
}


export const movieManagerService = new MovieManagerServices()