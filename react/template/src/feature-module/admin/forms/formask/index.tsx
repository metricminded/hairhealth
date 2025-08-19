import React, { useState } from "react";
import SidebarNav from "../../sidebar";
import { Link } from "react-router-dom";
import Header from "../../header";

// Custom Input Mask Component
interface InputMaskProps {
  mask: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const InputMask: React.FC<InputMaskProps> = ({ mask, value, onChange, className, placeholder }) => {
  const applyMask = (inputValue: string, maskPattern: string): string => {
    let result = '';
    let inputIndex = 0;
    
    for (let i = 0; i < maskPattern.length && inputIndex < inputValue.length; i++) {
      const maskChar = maskPattern[i];
      const inputChar = inputValue[inputIndex];
      
      if (maskChar === '9' && /\d/.test(inputChar)) {
        result += inputChar;
        inputIndex++;
      } else if (maskChar === 'a' && /[a-zA-Z]/.test(inputChar)) {
        result += inputChar;
        inputIndex++;
      } else if (maskChar === '*') {
        result += inputChar;
        inputIndex++;
      } else if (maskChar === '?' && inputChar) {
        result += inputChar;
        inputIndex++;
      } else if (!['9', 'a', '*', '?', '~'].includes(maskChar)) {
        result += maskChar;
        if (inputChar === maskChar) {
          inputIndex++;
        }
      } else if (maskChar === '~' && inputChar) {
        result += inputChar;
        inputIndex++;
      }
    }
    
    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^\w\s\-\(\)\.\,\%]/g, '');
    const maskedValue = applyMask(inputValue, mask);
    onChange(maskedValue);
  };

  return (
    <input
      type="text"
      className={className}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

const FormMask: React.FC = () => {
  const [formData, setFormData] = useState({
    phone: "",
    date: "",
    ssn: "",
    phoneExt: "",
    productKey: "",
    currency: "",
    eyeScript: "",
    percent: "",
    creditCard: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <>
    <Header />
      <SidebarNav />
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Form Mask</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/admin">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Form Mask</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          {/* Form Mask */}
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Form Mask</h5>
                  <p className="card-text">
                    Input masks can be used to force the user to enter data
                    conform a specific format. Unlike validation, the user cant
                    enter any other key than the ones specified by the mask.
                  </p>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="form-group">
                      <label>Phone</label>
                      <InputMask
                        className="form-control"
                        mask="(999) 999-9999"
                        value={formData.phone}
                        onChange={(value) => handleInputChange('phone', value)}
                        placeholder="(999) 999-9999"
                      />
                      <span className="form-text text-muted">
                        (999) 999-9999
                      </span>
                    </div>
                    <div className="form-group">
                      <label>Date</label>
                      <InputMask
                        className="form-control"
                        mask="99/99/9999"
                        value={formData.date}
                        onChange={(value) => handleInputChange('date', value)}
                        placeholder="dd/mm/yyyy"
                      />
                      <span className="form-text text-muted">dd/mm/yyyy</span>
                    </div>
                    <div className="form-group">
                      <label>SSN field 1</label>
                      <InputMask
                        className="form-control"
                        mask="999-99-9999"
                        value={formData.ssn}
                        onChange={(value) => handleInputChange('ssn', value)}
                        placeholder="999-99-9999"
                      />
                      <span className="form-text text-muted">
                        e.g 999-99-9999
                      </span>
                    </div>
                    <div className="form-group">
                      <label>Phone field + ext.</label>
                      <InputMask
                        className="form-control"
                        mask="(999) 999-9999? x99999"
                        value={formData.phoneExt}
                        onChange={(value) => handleInputChange('phoneExt', value)}
                        placeholder="(999) 999-9999 x99999"
                      />
                      <span className="form-text text-muted">
                        +40 999 999 999
                      </span>
                    </div>
                    <div className="form-group">
                      <label>Product Key</label>
                      <InputMask
                        className="form-control"
                        mask="a*-999-a999"
                        value={formData.productKey}
                        onChange={(value) => handleInputChange('productKey', value)}
                        placeholder="a*-999-a999"
                      />
                      <span className="form-text text-muted">
                        e.g a*-999-a999
                      </span>
                    </div>
                    <div className="form-group">
                      <label>Currency</label>
                      <InputMask
                        className="form-control"
                        mask="999,999,999.99"
                        value={formData.currency}
                        onChange={(value) => handleInputChange('currency', value)}
                        placeholder="999,999,999.99"
                      />
                      <span className="form-text text-muted">
                        $ 999,999,999.99
                      </span>
                    </div>
                    <div className="form-group">
                      <label>Eye Script</label>
                      <InputMask
                        className="form-control"
                        mask="~9.99 ~9.99 999"
                        value={formData.eyeScript}
                        onChange={(value) => handleInputChange('eyeScript', value)}
                        placeholder="~9.99 ~9.99 999"
                      />
                      <span className="form-text text-muted">
                        ~9.99 ~9.99 999
                      </span>
                    </div>
                    <div className="form-group">
                      <label>Percent</label>
                      <InputMask
                        className="form-control"
                        mask="99%"
                        value={formData.percent}
                        onChange={(value) => handleInputChange('percent', value)}
                        placeholder="99%"
                      />
                      <span className="form-text text-muted">e.g 99%</span>
                    </div>
                    <div className="form-group mb-0">
                      <label>Credit Card Number</label>
                      <InputMask
                        className="form-control"
                        mask="9999 9999 9999 9999"
                        value={formData.creditCard}
                        onChange={(value) => handleInputChange('creditCard', value)}
                        placeholder="9999 9999 9999 9999"
                      />
                      <span className="form-text text-muted">
                        e.g 999.999.999.9999
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* /Form Mask */}
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};
export default FormMask;
