export const studySchema = `
CREATE TABLE study_attempts(user_id TEXT NOT NULL REFERENCES "user"(id),subject TEXT NOT NULL,id TEXT NOT NULL,payload TEXT NOT NULL,created_at TEXT NOT NULL,session_id TEXT,position INTEGER,PRIMARY KEY(user_id,id),UNIQUE(user_id,session_id,position));
CREATE TABLE study_sessions(user_id TEXT NOT NULL REFERENCES "user"(id),subject TEXT NOT NULL,id TEXT NOT NULL,exam TEXT NOT NULL,plan TEXT NOT NULL,cursor INTEGER NOT NULL DEFAULT 0,status TEXT NOT NULL DEFAULT 'active',created_at TEXT NOT NULL,PRIMARY KEY(user_id,id));
CREATE TABLE study_marks(user_id TEXT NOT NULL REFERENCES "user"(id),subject TEXT NOT NULL,kind TEXT NOT NULL,item TEXT NOT NULL,value INTEGER NOT NULL CHECK(value IN(0,1)),version INTEGER NOT NULL,PRIMARY KEY(user_id,subject,kind,item));
CREATE TABLE study_resets(user_id TEXT NOT NULL REFERENCES "user"(id),subject TEXT NOT NULL,after_row INTEGER NOT NULL,PRIMARY KEY(user_id,subject));
`;
