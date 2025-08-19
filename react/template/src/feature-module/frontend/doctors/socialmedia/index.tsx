import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../header";
import DoctorSidebar from "../sidebar";
import Select from "react-select";
import ImageWithBasePath from "../../../../components/imageWithBasePath";

interface SocialMediaLink {
  platform: string;
  url: string;
}

const SocialMedia: React.FC = (props) => {
  const options = [
    { value: 1, label: "Facebook" },
    { value: 2, label: "Linkedin" },
    { value: 3, label: "Twitter" },
    { value: 4, label: "Instagram" },
  ];

  const [socialMediaLinks, setSocialMediaLinks] = useState<SocialMediaLink[]>([]);

  const addSocialMedia = () => {
    setSocialMediaLinks([...socialMediaLinks, { platform: '', url: '' }]);
  };

  const removeSocialMedia = (index: number) => {
    const updatedLinks = socialMediaLinks.filter((_, i) => i !== index);
    setSocialMediaLinks(updatedLinks);
  };

  const updateSocialMediaLink = (index: number, field: 'platform' | 'url', value: string) => {
    const updatedLinks = [...socialMediaLinks];
    updatedLinks[index] = { ...updatedLinks[index], [field]: value };
    setSocialMediaLinks(updatedLinks);
  };

  return (
    <div>
      <Header {...props} />
      <>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container">
            <div className="row align-items-center inner-banner">
              <div className="col-md-12 col-12 text-center">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/index">
                        <i className="isax isax-home-15" />
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Doctor
                    </li>
                    <li className="breadcrumb-item active">Social Media</li>
                  </ol>
                  <h2 className="breadcrumb-title">Social Media</h2>
                </nav>
              </div>
            </div>
          </div>
          <div className="breadcrumb-bg">
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-01.png"
              alt="img"
              className="breadcrumb-bg-01"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-bg-02.png"
              alt="img"
              className="breadcrumb-bg-02"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-03"
            />
            <ImageWithBasePath
              src="assets/img/bg/breadcrumb-icon.png"
              alt="img"
              className="breadcrumb-bg-04"
            />
          </div>
        </div>
        {/* /Breadcrumb */}
      </>

      {/* Page Content */}
      <div className="content doctor">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorSidebar />
              {/* /Profile Sidebar */}
            </div>
            <div className="col-lg-8 col-xl-9">
              <div className="dashboard-header">
                <h3>Social Media</h3>
              </div>
              <div className="add-btn text-end mb-4">
                <Link to="#" className="btn btn-primary prime-btn add-social-media" onClick={addSocialMedia}>
                  Add New Social Media
                </Link>
              </div>
              <form className="social-media-form">
                {socialMediaLinks.map((link, index) => (
                  <div className="social-media-links d-flex align-items-center" key={index}>
                    <div className="input-block input-block-new select-social-link">
                      <Select
                        className="select-social-img me-2"
                        defaultValue={options[0]}
                        options={options}
                        placeholder="Select Platform"
                        isSearchable={false}
                        onChange={(selectedOption) => 
                          updateSocialMediaLink(index, 'platform', selectedOption?.label || '')
                        }
                      />
                    </div>
                    <div className="input-block input-block-new flex-fill">
                      <input
                        type="url"
                        className="form-control"
                        placeholder="Add Url"
                        value={link.url}
                        onChange={(e) => updateSocialMediaLink(index, 'url', e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger ms-2"
                      onClick={() => removeSocialMedia(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options[1]}
                      options={options}
                      placeholder="Select Platform"
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options[2]}
                      options={options}
                      placeholder="Select Platform"
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options[3]}
                      options={options}
                      placeholder="Select Platform"
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
                <div className="social-media-links d-flex align-items-center">
                  <div className="input-block input-block-new select-social-link">
                    <Select
                      className="select-social-img me-2"
                      defaultValue={options[0]}
                      options={options}
                      placeholder="Select Platform"
                      isSearchable={false}
                    />
                  </div>
                  <div className="input-block input-block-new flex-fill">
                    <input
                      type="url"
                      className="form-control"
                      placeholder="Add Url"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default SocialMedia;
