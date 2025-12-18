//******************************************************************************************************
//  SystemSettings.cs - Gbtc
//
//  Copyright © 2020, Grid Protection Alliance.  All Rights Reserved.
//
//  Licensed to the Grid Protection Alliance (GPA) under one or more contributor license agreements. See
//  the NOTICE file distributed with this work for additional information regarding copyright ownership.
//  The GPA licenses this file to you under the MIT License (MIT), the "License"; you may not use this
//  file except in compliance with the License. You may obtain a copy of the License at:
//
//      http://opensource.org/licenses/MIT
//
//  Unless agreed to in writing, the subject software distributed under the License is distributed on an
//  "AS-IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. Refer to the
//  License for the specific language governing permissions and limitations.
//
//  Code Modification History:
//  ----------------------------------------------------------------------------------------------------
//  06/23/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gemstone.Data.Model;

namespace PQDigest.Models
{
    /// <summary>
    /// Defines a company
    /// </summary>
    [PostRoles("Administrator")]
    [DeleteRoles("Administrator")]
    [PatchRoles("Administrator")]
    public class Company
    {
        [PrimaryKey(true)]
        public int ID { get; set; }
        public string CompanyID { get; set; }
        public int CompanyTypeID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}