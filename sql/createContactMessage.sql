CREATE TABLE ContactMessages (
    Id INT IDENTITY(1,1) PRIMARY KEY,       -- Unique message ID
    UserId INT NOT NULL,                     -- FK to Users table
    Name NVARCHAR(100) NOT NULL,             -- Visitor name
    Email NVARCHAR(150) NOT NULL,            -- Visitor email
    Message NVARCHAR(MAX) NOT NULL,          -- Message content
    Status NVARCHAR(20) NOT NULL DEFAULT 'New', -- New / Completed / Archived
    CONSTRAINT FK_User FOREIGN KEY (UserId) REFERENCES Users(UserId)
);
