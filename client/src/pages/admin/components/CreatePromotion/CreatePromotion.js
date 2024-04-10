import classNames from "classnames/bind";
import styles from './CreatePromotion.module.scss';
import { useFormik } from "formik";
import Button from "~/components/Button";
import { apiCreatePromotion } from "~/apis/promotion";
import { toast } from "react-toastify";
import { promotionValidation } from "~/components/Form/SignupValidation";

const cx = classNames.bind(styles)

function CreatePromotion() {

    const {values ,resetForm, errors, handleChange,handleSubmit, handleBlur, touched} = useFormik({
        initialValues: {
            name: '',
            coupon_code: '',
            discount_value: '',
            min_order_value: '',
            expired: '',
            status: '',
        },
        validationSchema: promotionValidation,
        
        onSubmit : async() => {
            const response = await apiCreatePromotion(values);
            console.log(response);
            if(response.success) {
                resetForm();
                toast.success(response.message)
            }
            else toast.error(response.message);
        },
      });

    const active = [
        {title: 'active', value: true},
        {title: 'inactive', value: false},
    ]
    return ( 
        <div className={cx('wrapper', 'update-page')}>
            <div className={cx('inner')}>
                <div className={cx('box-header')}>
                    <h2 className={cx('header-name')}>Thêm khuyến mãi mới</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={cx('box-input')}>
                        <div className={cx('form-group')}>
                            <label>Tên khuyến mãi</label>
                            <input 
                                type="text"
                                placeholder="Tên khuyến mãi"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cx(errors.name && touched.name ? 'input-error':'')}
                            />
                            {errors.name && touched.name && <span>{errors.name}</span>}
                        </div>
                        <div className={cx('form-group')}>
                            <label>Mã giảm giá</label>
                            <input 
                                type="text"
                                placeholder="Mã khuyến mãi"
                                name="coupon_code"
                                value={values.coupon_code}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cx(errors.coupon_code && touched.coupon_code ? 'input-error':'')}
                            />
                            {errors.coupon_code && touched.coupon_code && <span>{errors.coupon_code}</span>}
                        </div>
                    </div>
                    <div className={cx('box-input')}>
                        <div className={cx('form-group')}>
                            <label>Giá trị đơn hàng tối thiểu</label>
                            <input 
                                type="text"
                                placeholder="Giá trị đơn hàng tối thiểu"
                                name="min_order_value"
                                value={values.min_order_value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cx(errors.min_order_value && touched.min_order_value ? 'input-error':'')}
                            />
                            {errors.min_order_value && touched.min_order_value && <span>{errors.min_order_value}</span>}
                        </div>
                        <div className={cx('form-group')}>
                            <label>Giá trị giảm giá</label>
                            <input 
                                type="text"
                                placeholder="Giá trị giảm giá"
                                name="discount_value"
                                value={values.discount_value}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cx(errors.discount_value && touched.discount_value ? 'input-error':'')}
                            />
                            {errors.discount_value && touched.discount_value && <span>{errors.discount_value}</span>}
                        </div>
                    </div>
                    <div  className={cx('box-input')}> 
                        <div className={cx('form-group')}>
                            <label>Ngày hết hạn</label>
                            <input 
                                type="date"
                                placeholder="ngày hết hạn"
                                name="expired"
                                value={values.expired}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={cx(errors.expired && touched.expired ? 'input-error':'')}
                            />
                            {errors.expired && touched.expired && <span>{errors.expired}</span>}
                        </div> 
                        <div className={cx('form-select')}>
                            <label htmlFor="brand">Trạng thái</label>
                            <select 
                                id="brand" 
                                value={values.status} 
                                name="status"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="">--CHOOSE--</option>
                                {
                                    active?.map((el, index)=> (
                                        <option key={index} value={el.value}>{el.title}</option>
                                    ))
                                }
                            </select>
                            {errors.status && touched.status && <span>{errors.status}</span>}
                        </div>   
                    </div>
                        
                    <div className={cx('ctrl-create')}>
                        <Button type="submit" className={cx('control-btn')}>
                            Tạo khuyến mãi mới
                        </Button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default CreatePromotion;