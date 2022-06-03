import { baseService } from "./BaseServices";

class BookingManagerServices extends baseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    };
    getBookingDetailService(bookingId) {
        return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${bookingId}`)
    }
    postBookingDetailService(modelBooking) {
        return this.post('QuanLyDatVe/DatVe', modelBooking)
    }
    postNewFimCalenderAdminService (filmCalender) {
        return this.post('QuanLyDatVe/TaoLichChieu',filmCalender)
    }
}


export const bookingManagerService = new BookingManagerServices()