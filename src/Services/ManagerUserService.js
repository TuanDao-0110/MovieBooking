/* eslint-disable no-useless-constructor */
import { GroupId } from "../utilities/Setting/config";
import { baseService } from "./BaseServices";

class ManagerUserServices extends baseService {
    constructor() {
        super()
    }
    loginUser(userData) {
        return this.post('QuanLyNguoiDung/DangNhap', userData)
    }
    logUpUser(userData) {
        return this.post('QuanLyNguoiDung/DangKy', userData)
    }
    postUserBookingInfor() {
        return this.post('QuanLyNguoiDung/ThongTinTaiKhoan', '')
    }
    takeUserList() {
        return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GroupId}`)
    }

    searchingUserService(searchKey) {
        return this.get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GroupId}&tuKhoa=${searchKey}`)
    }
    addUserService(userModel) {
        return this.post('QuanLyNguoiDung/ThemNguoiDung', userModel)
    }
    deleteAcountService(discriptionKey) {
        return this.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${discriptionKey}`)
    }
    editAccountService(dataModel) {
        return this.post(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, dataModel)
    }
}


export const managerUserService = new ManagerUserServices()