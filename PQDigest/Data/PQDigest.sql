--//******************************************************************************************************
--//  PQDigest.sql - Gbtc
--//
--//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
--//
--//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
--//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
--//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
--//  file except in compliance with the License. You may obtain a copy of the License at:
--//
--//      http://opensource.org/licenses/MIT
--//
--//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
--//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
--//  License for the specific language governing permissions and limitations.
--//
--//  Code Modification History:
--//  ----------------------------------------------------------------------------------------------------
--//  06/10/2020 - Billy Ernest
--//       Generated original version of source code.
--//
--//******************************************************************************************************

USE [master]
GO
CREATE DATABASE PQDigest
GO

USE PQDIGEST
GO

CREATE TABLE Log (

   Id int IDENTITY(1,1) NOT NULL PRIMARY KEY,
   Message nvarchar(max) NULL,
   MessageTemplate nvarchar(max) NULL,
   Level nvarchar(128) NULL,
   TimeStamp datetimeoffset(7) NOT NULL,
   Exception nvarchar(max) NULL,
   Properties xml NULL,
   LogEvent nvarchar(max) NULL
)
GO

CREATE TABLE Setting
(
    ID INT IDENTITY(1, 1) NOT NULL PRIMARY KEY,
    Name VARCHAR(200) NULL,
    Value VARCHAR(MAX) NULL,
    DefaultValue VARCHAR(MAX) NULL
)
GO

INSERT INTO Setting(Name,Value) VALUES('Email.Mailto', 'something@something.com')
GO

CREATE TABLE MagDurCurve(
	ID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	Name varchar(200) NOT NULL,
	Visible bit NOT NULL,
	Color varchar(20) NOT NULL,
	XHigh float NOT NULL,
	XLow float NOT NULL,
	YHigh float NOT NULL,
	YLow float NOT NULL
)
GO

CREATE TABLE MagDurCurvePoint(
	ID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	VoltageCurveID int NOT NULL FOREIGN KEY REFERENCES MagDurCurve(ID),
	PerUnitMagnitude float NOT NULL,
	DurationSeconds float NOT NULL,
	LoadOrder int NOT NULL
)
GO

INSERT MagDurCurve (Name, Visible, Color,XHigh,XLow,YHigh,YLow) VALUES (N'ITIC Upper', 1, 'orange', 100, 0.000001,5,0)
GO
INSERT MagDurCurve (Name, Visible, Color,XHigh,XLow,YHigh,YLow) VALUES (N'ITIC Lower', 1, 'green', 100, 0.000001,5,0)
GO
INSERT MagDurCurve (Name, Visible, Color,XHigh,XLow,YHigh,YLow) VALUES (N'SEMI F47', 0, 'red',1, 0.05, 1,0)
GO
INSERT MagDurCurve (Name, Visible, Color,XHigh,XLow,YHigh,YLow) VALUES (N'IEEE 1668 Recommended Type I & II', 0, 'purple', 3,0.01, 1.2,0)
GO
INSERT MagDurCurve (Name, Visible, Color,XHigh,XLow,YHigh,YLow) VALUES (N'IEEE 1668 Recommended Type III', 0, 'brown', 3,0.01, 1.2,0)
GO
INSERT MagDurCurve (Name, Visible, Color,XHigh,XLow,YHigh,YLow) VALUES (N'NERC PRC-024-2 Upper', 0, 'pink', 4,0.001,1.3,0)
GO
INSERT MagDurCurve (Name, Visible, Color,XHigh,XLow,YHigh,YLow) VALUES (N'NERC PRC-024-2 Lower', 0, 'yellow', 4,0.001,1.3,0)
GO


INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 5, 0.0001667, 0)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 2, 0.001, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 1.4, 0.003, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 1.2, 0.003, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 1.2, 0.5, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 1.1, 0.5, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 1.1, 100, 6)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0, 0.02, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0.7, 0.02, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0.7, 0.5, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0.8, 0.5, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0.8, 10, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0.9, 10, 6)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0.9, 100, 7)
GO

INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI F47'), 0.5, 0.05, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI F47'), 0.5, 0.2, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI F47'), 0.7, 0.2, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI F47'), 0.7, 0.5, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI F47'), 0.8, 0.5, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI F47'), 0.8, 1, 6)
GO

INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 0.5, 0.01, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 0.5, 0.2, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 0.7, 0.2, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 0.7, 0.5, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 0.8, 0.5, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 0.8, 2, 6)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 1, 2, 7)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 1, 0.01, 8)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type I & II'), 0.5, 0.01, 9)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 0.5, 0.01, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 0.5, 0.05, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 0.7, 0.05, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 0.7, 0.1, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 0.8, 0.1, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 0.8, 2, 6)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 1, 2, 7)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 1, 0.01, 8)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1668 Recommended Type III'), 0.5, 0.01, 9)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.2, 0.001, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.2, 0.2, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.175, 0.2, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.175, 0.5, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.15, 0.5, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.15, 1, 6)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.10, 1, 7)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Upper'), 1.10, 4, 8)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0, 0.001, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0, 0.15, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.45, 0.15, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.45, 0.3, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.65, 0.3,5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.65, 2, 6)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.75, 2, 7)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.75, 3, 8)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.90, 3, 9)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'NERC PRC-024-2 Lower'),0.9, 4, 10)
GO
