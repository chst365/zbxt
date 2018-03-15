--------------------------------------
--2、渠道表t_ditch

CREATE TABLE t_ditch (
  uuid varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  sex varchar(50) NOT NULL,
  phone varchar(50) NOT NULL,
  weixin varchar(50) NOT NULL,
  company varchar(50) NOT NULL,
  job varchar(50) NOT NULL,
  empUuid varchar(50) NOT NULL,
  rank varchar(50) NOT NULL,
  source varchar(50) NOT NULL,
  
  remark varchar(250) DEFAULT NULL,
  openAndclose varchar(10) DEFAULT NULL,
  
  createDate datetime DEFAULT NULL,
  modifyDate datetime DEFAULT NULL,
  createPeople varchar(50) DEFAULT NULL,
  modifyPeople varchar(50) DEFAULT NULL,
  
  PRIMARY KEY (uuid)
);

--------------------------------------
-- 跟踪记录  t_record

CREATE TABLE t_record (
  uuid varchar(50) NOT NULL,
  ditchUuid varchar(50) NOT NULL,
  recordDate varchar(50) DEFAULT NULL,
  remarkText varchar(250) DEFAULT NULL,
  
  createDate datetime DEFAULT NULL,
  modifyDate datetime DEFAULT NULL,
  createPeople varchar(50) DEFAULT NULL,
  modifyPeople varchar(50) DEFAULT NULL,
  
  PRIMARY KEY (uuid)
);

--------------------------------------
--3、员工表t_employee

CREATE TABLE t_employee (
  uuid varchar(50) NOT NULL,
  name varchar(30) NOT NULL,
  empNum varchar(30) DEFAULT NULL,
  phone varchar(30) DEFAULT NULL,
  depart varchar(30) DEFAULT NULL,
  job varchar(30) DEFAULT NULL,
  permissionTempl varchar(30) DEFAULT NULL,
  remark varchar(255) DEFAULT NULL,
  claTeacher varchar(30) NOT NULL,
  
  sex varchar(30) DEFAULT NULL,
  org varchar(30) DEFAULT NULL,
  workDate varchar(30) DEFAULT NULL,
  fullhalf varchar(30) DEFAULT NULL,
  jobRemark varchar(30) DEFAULT NULL,
  openAndclose varchar(10) DEFAULT NULL,
  
  createDate datetime DEFAULT NULL,
  modifyDate datetime DEFAULT NULL,
  createPeople varchar(50) DEFAULT NULL,
  modifyPeople varchar(50) DEFAULT NULL,
  
  PRIMARY KEY (uuid)
);

--------------------------------------


--------------------------------------


--------------------------------------



--------------------------------------


--------------------------------------


--------------------------------------


--------------------------------------


--------------------------------------
-- 部门表t_department

CREATE TABLE t_department (
  uuid varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  remark varchar(250) DEFAULT NULL,
  openAndclose varchar(10) DEFAULT NULL,
  
  createDate datetime DEFAULT NULL,
  modifyDate datetime DEFAULT NULL,
  createPeople varchar(50) DEFAULT NULL,
  modifyPeople varchar(50) DEFAULT NULL,
  
  PRIMARY KEY (uuid)
);

--------------------------------------
--9、角色表t_role

CREATE TABLE t_role (
  uuid varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  
  createDate datetime DEFAULT NULL,
  modifyDate datetime DEFAULT NULL,
  createPeople varchar(50) DEFAULT NULL,
  modifyPeople varchar(50) DEFAULT NULL,
  remark varchar(50)Not Null,
  PRIMARY KEY (uuid)
);

--------------------------------------
--9、资源表t_resource

CREATE TABLE t_resource (
  uuid varchar(50) NOT NULL,
  name varchar(50) NOT NULL,
  
  createDate datetime DEFAULT NULL,
  modifyDate datetime DEFAULT NULL,
  createPeople varchar(50) DEFAULT NULL,
  modifyPeople varchar(50) DEFAULT NULL,
  
  PRIMARY KEY (uuid)
);


--------------------------------------


--------------------------------------


--16、用户角色表t_userPK

CREATE TABLE t_userPK_role (
  uuid varchar(50) NOT NULL,
  userPkid varchar(50) NOT NULL,
  Roleid varchar(50) NOT NULL,
  PRIMARY KEY (uuid)
);

=======

--15、角色资源表t_role_resource

CREATE TABLE t_role_resource (
  uuid varchar(50) NOT NULL,
  roleid varchar(50) NOT NULL,
  resourceid varchar(50) NOT NULL,
  
  PRIMARY KEY (uuid)
);