import { memo, useState, useRef } from 'react';

function ProfileHeader() {
  const [coverImage, setCoverImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        setCoverImage(imageData);
        localStorage.setItem('profileCover', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="profile-header">
      {/* Cover Image */}
      <div className="profile-cover" onClick={handleCoverClick} style={{cursor: 'pointer'}}>
        {coverImage ? (
          <img src={coverImage} alt="Profile cover" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        ) : (
          <div className="cover-gradient"></div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{display: 'none'}}
          aria-label="Upload cover image"
        />
      </div>

      {/* Profile Info */}
      <div className="profile-info-container">
        <div className="profile-details">
          <div className="profile-header-top">
            <div className="profile-names">
              <h1 className="profile-name">Foxxy</h1>
              <p className="profile-handle">@prlpyl</p>
            </div>
          </div>

          <p className="profile-bio">
            Full-Stack Developer specializing in modern web applications with React and TypeScript
          </p>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">1</span>
              <span className="stat-label">Project</span>
            </div>
          </div>

          <div className="profile-links">
            <a href="https://github.com/girene646-laso" target="_blank" rel="noopener noreferrer" className="profile-link">
              <span>GitHub</span>
            </a>
            <a href="https://instagram.com/prlpyl" target="_blank" rel="noopener noreferrer" className="profile-link">
              <span>Instagram</span>
            </a>
            <a href="mailto:farrellfyelo@gmail.com" className="profile-link">
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ProfileHeader);
