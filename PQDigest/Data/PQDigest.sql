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
	Color varchar(20) NOT NULL
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

INSERT MagDurCurve (Name, Visible, Color) VALUES (N'ITIC Upper', 1, 'orange')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'ITIC Lower', 1, 'green')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'SEMI', 0, 'red')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1668 Recommended Type I & II', 0, 'purple')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1668 Recommended Type III', 0, 'brown')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 1.0 Transients', 0, 'pink')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.1.1 Instantaneous Sag', 0, 'grey')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.1.2 Instantaneous Swell', 0, 'yellow')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.2.1 Mom. Interruption', 0, 'cyan')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.2.2 Momentary Sag', 0, 'blue')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.2.3 Momentary Swell', 0, 'aquamarine')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.3.1 Temp. Interruption', 0, 'cadetblue')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.3.2 Temporary Sag', 0, 'burlywood')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 2.3.3 Temporary Swell', 0, 'cornflowerblue')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 3.1 Sustained Int.', 0, 'chartreuse')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 3.2 Undervoltage', 0, 'blueviolet')
GO
INSERT MagDurCurve (Name, Visible, Color) VALUES (N'IEEE 1159 3.3 Overvoltage', 0, 'darkgoldenrod')
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
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 5, 0.0001667, 0)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Upper'), 1.1, 1000000, 6)
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
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'ITIC Lower'), 0.9, 1000000, 7)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0, 0.02, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.5, 0.02, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.5, 0.2, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.7, 0.2, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.7, 0.5, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.8, 0.5, 6)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.8, 10, 7)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.9, 10, 8)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'SEMI'), 0.9, 1000000, 9)
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
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 1.0 Transients'), 0, 1E-06, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 1.0 Transients'), 0, 0.01, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 1.0 Transients'), 5, 0.01, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 1.0 Transients'), 5, 1E-06, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 1.0 Transients'), 0, 1E-06, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.1 Instantaneous Sag'), 0.1, 0.01, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.1 Instantaneous Sag'), 0.1, 0.5, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.1 Instantaneous Sag'), 0.9, 0.5, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.1 Instantaneous Sag'), 0.9, 0.01, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.1 Instantaneous Sag'), 0.1, 0.01, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.2 Instantaneous Swell'), 1.1, 0.01, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.2 Instantaneous Swell'), 1.1, 0.5, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.2 Instantaneous Swell'), 1.8, 0.5, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.2 Instantaneous Swell'), 1.8, 0.01, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.1.2 Instantaneous Swell'), 1.1, 0.01, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.1 Mom. Interruption'), 0, 0.01, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.1 Mom. Interruption'), 0, 3, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.1 Mom. Interruption'), 0.1, 3, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.1 Mom. Interruption'), 0.1, 0.01, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.1 Mom. Interruption'), 0, 0.01, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.2 Momentary Sag'), 0.1, 0.5, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.2 Momentary Sag'), 0.1, 3, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.2 Momentary Sag'), 0.9, 3, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.2 Momentary Sag'), 0.9, 0.5, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.2 Momentary Sag'), 0.1, 0.5, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.3 Momentary Swell'), 1.1, 0.5, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.3 Momentary Swell'), 1.1, 3, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.3 Momentary Swell'), 1.4, 3, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.3 Momentary Swell'), 1.4, 0.5, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.2.3 Momentary Swell'), 1.1, 0.5, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.1 Temp. Interruption'), 0, 3, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.1 Temp. Interruption'), 0, 60, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.1 Temp. Interruption'), 0.1, 60, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.1 Temp. Interruption'), 0.1, 3, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.1 Temp. Interruption'), 0, 3, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.2 Temporary Sag'), 0.1, 3, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.2 Temporary Sag'), 0.1, 60, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.2 Temporary Sag'), 0.9, 60, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.2 Temporary Sag'), 0.9, 3, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.2 Temporary Sag'), 0.1, 3, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.3 Temporary Swell'), 1.1, 3, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.3 Temporary Swell'), 1.1, 60, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.3 Temporary Swell'), 1.2, 60, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.3 Temporary Swell'), 1.2, 3, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 2.3.3 Temporary Swell'), 1.1, 3, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.1 Sustained Int.'), 0, 60, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.1 Sustained Int.'), 0, 1000000, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.1 Sustained Int.'), 0.1, 1000000, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.1 Sustained Int.'), 0.1, 60, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.1 Sustained Int.'), 0, 60, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.2 Undervoltage'), 0.8, 60, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.2 Undervoltage'), 0.8, 1000000, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.2 Undervoltage'), 0.9, 1000000, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.2 Undervoltage'), 0.9, 60, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.2 Undervoltage'), 0.8, 60, 5)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.3 Overvoltage'), 1.1, 60, 1)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.3 Overvoltage'), 1.1, 1000000, 2)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.3 Overvoltage'), 1.2, 1000000, 3)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.3 Overvoltage'), 1.2, 60, 4)
GO
INSERT MagDurCurvePoint (VoltageCurveID, PerUnitMagnitude, DurationSeconds, LoadOrder) VALUES ((SELECT ID FROM MagDurCurve WHERE Name = 'IEEE 1159 3.3 Overvoltage'), 1.1, 60, 5)
GO

