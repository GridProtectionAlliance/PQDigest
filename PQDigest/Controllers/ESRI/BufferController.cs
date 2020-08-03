﻿//******************************************************************************************************
//  BufferController.cs - Gbtc
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
//  07/22/2020 - Billy Ernest
//       Generated original version of source code.
//
//******************************************************************************************************

using Gemstone.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using OpenXDA.Model;
using PQDigest.Models;
using System.Net.Http;
using Gemstone.Numeric.Random;
using System.Data;
using System.Net;
using System.IO;

namespace PQDigest.Controllers
{
    [Route("api/ESRI/[controller]")]
    [ApiController]
    public class BufferController : ControllerBase
    {
        private readonly IConfiguration m_configuration;

        public BufferController(IConfiguration configuration)
        {
            m_configuration = configuration;
        }

        public class PostData
        {
            public string LineJSON { get; set; }
            public float Radius { get; set; }
        }

        [HttpPost("")]
        public ActionResult Post([FromBody] PostData postData) {
            using (AdoDataConnection xdaConnection = new AdoDataConnection(m_configuration["OpenXDA:ConnectionString"], m_configuration["OpenXDA:DataProviderString"]))
            {
#if DEBUG
                return Ok("{\"geometries\":[{\"rings\":[[[-85.027221904999976,34.996450845000027],[-85.027990849999981,34.996437041000036],[-85.028759794999985,34.996450845000027],[-85.029527276999943,34.996492232000037],[-85.030291834999957,34.996561123000049],[-85.03105201599999,34.996657387000027],[-85.031806372999938,34.996780840000042],[-85.032553470999972,34.996931248000067],[-85.033291887999951,34.997108324000067],[-85.034020218999956,34.997311732000071],[-85.034737078999967,34.99754108500008],[-85.035441102999982,34.997795946000053],[-85.036130950999961,34.998075830000062],[-85.036805311999956,34.998380206000036],[-85.037462901999959,34.998708493000038],[-85.038102468999966,34.999060067000073],[-85.038722796999934,34.999434259000054],[-85.039322703999972,34.999830357000064],[-85.039901049999969,35.000247607000063],[-85.040456731999939,35.000685217000068],[-85.040988693999964,35.001142352000045],[-85.041495921999967,35.001618142000041],[-85.04197745099998,35.002111684000056],[-85.042432364999968,35.002622036000048],[-85.042859796999949,35.003148229000033],[-85.043258932999947,35.003689261000034],[-85.043629012999986,35.00424410200003],[-85.043969331999961,35.004811696000047],[-85.044279241999959,35.005390964000071],[-85.044558152999969,35.005980802000067],[-85.044805531999941,35.006580088000078],[-85.045020908999959,35.007187681000062],[-85.045203871999945,35.007802426000069],[-85.045354073999988,35.008423152000034],[-85.045471225999961,35.009048677000067],[-85.045555105999938,35.009677812000064],[-85.045605552999973,35.01030935700004],[-85.045622469999955,35.010942112000066],[-85.045605823999949,35.01157487200004],[-85.045555645999968,35.012206432000028],[-85.045472031999964,35.012835591000055],[-85.045355137999991,35.013461149000079],[-85.045205187999954,35.014081917000055],[-85.045022464999988,35.014696713000035],[-85.044807317999982,35.015304365000077],[-85.044560153999953,35.01590371900005],[-85.044281442999988,35.01649363100006],[-85.043971716999977,35.01707298000008],[-85.043631562999963,35.01764066100003],[-85.043261628999971,35.018195595000066],[-85.042862617999958,35.018736725000053],[-85.042435289999958,35.019263020000039],[-85.041980457999955,35.019773477000058],[-85.041498987999944,35.020267126000078],[-85.040991794999968,35.020743026000048],[-85.040459844999987,35.021200271000055],[-85.039904150999973,35.021637991000034],[-85.039325769999948,35.022055351000063],[-85.038725803999967,35.022451556000078],[-85.038105394999945,35.022825854000075],[-85.037465723999958,35.023177529000066],[-85.03680800799998,35.023505914000054],[-85.036133500999938,35.023810382000079],[-85.035443486999952,35.024090354000066],[-85.03473927999994,35.024345296000035],[-85.03402221999994,35.024574723000057],[-85.033110637999982,35.024824783000042],[-85.032183846999942,35.025033617000076],[-85.029599856999937,35.025553999000067],[-85.028721496999935,35.025790611000048],[-85.026118861999976,35.026491650000025],[-85.024182722999967,35.02701311900006],[-85.021532405999949,35.027726878000067],[-85.018691585999989,35.028491863000056],[-85.016263358999936,35.029145677000031],[-85.013866835999977,35.029790898000044],[-85.012343189999967,35.03020108000004],[-85.009898990999943,35.030859037000027],[-85.006677028999945,35.031726267000067],[-85.004661278999947,35.032268778000059],[-85.000645580999958,35.033349421000025],[-84.99901069699996,35.033789330000047],[-84.994788488999973,35.034925300000054],[-84.992963058999976,35.035416368000028],[-84.992570910999973,35.035521853000034],[-84.992310171999975,35.035661601000072],[-84.990155303999984,35.03681646900003],[-84.987132803999941,35.038436212000079],[-84.984264104999966,35.039973403000033],[-84.98226294799997,35.041045645000054],[-84.978792289999944,35.042905117000032],[-84.977168860999939,35.043774835000079],[-84.975973740999962,35.044415057000037],[-84.975798343999941,35.045004983000069],[-84.975583116999985,35.045612633000076],[-84.975335861999952,35.046211984000024],[-84.974956159999977,35.046998199000029],[-84.974648252999941,35.047585240000046],[-84.974215215999948,35.048349029000065],[-84.973728966999943,35.049090848000048],[-84.973329805999981,35.049631975000068],[-84.972902317999967,35.050158267000029],[-84.972447313999965,35.050668722000069],[-84.971965662999935,35.051162369000053],[-84.971458278999989,35.051638267000044],[-84.970926128999963,35.052095509000026],[-84.970370225999943,35.052533226000037],[-84.96979162699995,35.05295058400003],[-84.969191434999971,35.053346788000056],[-84.968570792999969,35.053721083000028],[-84.967930880999972,35.054072758000075],[-84.967272917999935,35.054401141000028],[-84.966598156999964,35.054705607000074],[-84.965907882999943,35.054985578000071],[-84.965203410999948,35.055240519000051],[-84.964486080999961,35.055469945000027],[-84.963757259999966,35.055673419000072],[-84.963018335999948,35.055850554000074],[-84.962270715999978,35.056001012000024],[-84.961515823999946,35.05612450600006],[-84.960755097999936,35.056220803000031],[-84.959989985999982,35.056289717000027],[-84.959221945999957,35.05633111800006],[-84.958452439999974,35.056344927000055],[-84.95768293399999,35.05633111800006],[-84.956914893999965,35.056289717000027],[-84.956149781999954,35.056220803000031],[-84.955389055999945,35.05612450600006],[-84.95463416399997,35.056001012000024],[-84.953886543999943,35.055850554000074],[-84.953147619999982,35.055673419000072],[-84.952418798999986,35.055469945000027],[-84.951701468999943,35.055240519000051],[-84.950996996999947,35.054985578000071],[-84.950306722999983,35.054705607000074],[-84.949631961999955,35.054401141000028],[-84.948973998999975,35.054072758000075],[-84.948334086999978,35.053721083000028],[-84.947713444999977,35.053346788000056],[-84.947113252999941,35.05295058400003],[-84.946534653999947,35.052533226000037],[-84.945978750999984,35.052095509000026],[-84.945446600999958,35.051638267000044],[-84.944939216999956,35.051162369000053],[-84.944457565999983,35.050668722000069],[-84.94400256199998,35.050158267000029],[-84.943575073999966,35.049631975000068],[-84.943175912999948,35.049090848000048],[-84.942805839999949,35.048535917000038],[-84.942465557999981,35.047968238000067],[-84.942155714999956,35.047388893000061],[-84.941876899999954,35.046798983000031],[-84.941692847999946,35.046352842000033],[-84.941196961999935,35.04572607800003],[-84.940704776999951,35.045066083000052],[-84.940334721999989,35.044511152000041],[-84.939994456999955,35.04394347300007],[-84.939684628999942,35.043364126000029],[-84.939405827999963,35.042774217000044],[-84.939158582999937,35.042174866000039],[-84.938943364999943,35.041567216000033],[-84.938760582999976,35.040952423000078],[-84.938610583999946,35.040331658000071],[-84.938493651999977,35.039706102000025],[-84.938410009999984,35.03907694600008],[-84.938359815999945,35.03844538900006],[-84.938343164999935,35.037812632000055],[-84.938360087999968,35.037179880000053],[-84.938410550999947,35.036548337000056],[-84.938494458999969,35.035919206000074],[-84.938611649999984,35.035293683000077],[-84.938761899999975,35.03467296000008],[-84.938944923999941,35.034058218000041],[-84.939160370999957,35.033450627000036],[-84.939407831999972,35.032851344000051],[-84.939686832999939,35.032261508000033],[-84.939996844999939,35.031682243000034],[-84.94033727599998,35.031114652000042],[-84.940707476999989,35.030559813000025],[-84.941106742999978,35.030018784000049],[-84.941534314999956,35.029492594000033],[-84.94198937799996,35.02898224300003],[-84.94247106499995,35.02848870400004],[-84.94297845899996,35.028012915000033],[-84.943510594999964,35.027555782000036],[-84.944066458999941,35.027118175000055],[-84.944644993999987,35.026700927000036],[-84.945481061999942,35.026158490000057],[-84.946355394999955,35.025658544000066],[-84.947814119999975,35.024877066000045],[-84.949647538999955,35.023894852000069],[-84.952404588999968,35.022417824000058],[-84.955201023999962,35.020919697000068],[-84.957919797999978,35.019463436000024],[-84.959542938999959,35.018593978000069],[-84.963012990999971,35.016735056000073],[-84.965013791999979,35.015663135000068],[-84.96788197699999,35.014126407000049],[-84.970903956999962,35.012507139000036],[-84.973058432999949,35.011352622000061],[-84.975261305999936,35.010172092000062],[-84.976070267999944,35.009763632000045],[-84.976744721999978,35.009459258000049],[-84.977434665999965,35.009179374000041],[-84.978138787999967,35.008924513000068],[-84.978855746999955,35.008695161000048],[-84.979406565999966,35.008538672000043],[-84.982001668999942,35.007840630000032],[-84.983826530999977,35.007349730000044],[-84.988047440999935,35.006214145000058],[-84.989681819999987,35.005774386000041],[-84.993696296999985,35.004694105000056],[-84.995711422999989,35.004151780000029],[-84.998932402999969,35.003284841000038],[-85.001375860999985,35.002627104000055],[-85.002899026999955,35.002217064000035],[-85.005294816999935,35.001572061000047],[-85.007722304999959,35.00091846600003],[-85.010562248999975,35.000153741000076],[-85.013211762999958,34.999440221000043],[-85.015147300999956,34.998918931000048],[-85.017749135999964,34.998218129000065],[-85.019267321999962,34.997809174000054],[-85.019911018999949,34.997646905000067],[-85.020561773999987,34.997504975000027],[-85.023799290999989,34.996852991000026],[-85.024929683999972,34.996657387000027],[-85.025689864999947,34.996561123000049],[-85.026454422999961,34.996492232000037],[-85.027221904999976,34.996450845000027]],[[-85.058721488999936,35.089839247000043],[-85.058170722999989,35.08947583500003],[-85.057567159999962,35.089776936000078],[-85.056892107999943,35.090081401000077],[-85.056201535999946,35.09036136900005],[-85.055496759999983,35.09061630900004],[-85.054779119999978,35.090845734000027],[-85.054049984999949,35.091049207000026],[-85.053310741999951,35.091226341000038],[-85.052562798999986,35.091376798000056],[-85.051807580999935,35.091500292000035],[-85.051046526999983,35.091596588000073],[-85.050281084999938,35.09166550100008],[-85.049512712999956,35.091706902000055],[-85.048742874999959,35.09172071100005],[-85.047693230999982,35.09169502900005],[-85.046647303999976,35.091618075000042],[-85.044716763999986,35.091428277000034],[-85.04374796999997,35.091310527000076],[-85.043005769999979,35.091189401000065],[-85.04227057199995,35.091042233000053],[-85.041543727999965,35.090869293000026],[-85.04092684799997,35.090698640000028],[-85.039471429999935,35.090734429000065],[-85.038943916999983,35.090740912000058],[-85.038421033999953,35.090734543000053],[-85.036919261999969,35.090697940000041],[-85.036280759999954,35.090672853000058],[-85.035643781999966,35.090628774000038],[-85.035009165999952,35.09056576100005],[-85.034377742999936,35.09048389600008],[-85.03362253399996,35.090360402000044],[-85.032874600999946,35.090209945000026],[-85.032135366999967,35.090032811000071],[-85.031406240999956,35.089829338000072],[-85.03068860999997,35.089599913000029],[-85.029983841999979,35.089344974000028],[-85.029293278999944,35.089065005000066],[-85.028618234999954,35.088760540000067],[-85.027959996999982,35.088432159000035],[-85.027319816999977,35.088080486000024],[-85.026698913999951,35.087706193000031],[-85.026098469999965,35.08730999200003],[-85.025519629999962,35.086892636000073],[-85.024963492999973,35.08645492100004],[-85.024431119999974,35.085997681000038],[-85.02392352399994,35.085521786000072],[-85.023441670999944,35.085028142000056],[-85.022986476999961,35.084517690000041],[-85.022558808999975,35.083991401000048],[-85.02215948099996,35.083450277000054],[-85.021789252999952,35.082895349000069],[-85.021448828999951,35.082327673000066],[-85.021138855999936,35.081748331000028],[-85.020859923999978,35.081158425000069],[-85.020612563999975,35.080559078000078],[-85.02039724499997,35.07995143100004],[-85.020214377999935,35.079336642000044],[-85.020064307999974,35.078715881000051],[-85.01994732199995,35.078090329000077],[-85.019863640999972,35.077461178000078],[-85.019813423999949,35.076829624000027],[-85.019796764999967,35.076196871000036],[-85.019804395999984,35.07577285900004],[-85.019824293999989,35.075216817000069],[-85.019656468999983,35.073795896000036],[-85.019375337999975,35.071600828000044],[-85.01919191199994,35.070190364000041],[-85.019174923999969,35.070053605000055],[-85.018902168999944,35.067749807000041],[-85.018717554999967,35.066247463000025],[-85.018711337999946,35.066195954000079],[-85.018478820999974,35.064233712000032],[-85.018218970999953,35.062025861000052],[-85.01800781899999,35.060274136000032],[-85.017992137999954,35.060137454000028],[-85.017722436999975,35.057661334000045],[-85.017444276999981,35.05512903500005],[-85.017331013999978,35.054102159000024],[-85.01715225099997,35.052491954000061],[-85.016946055999938,35.050642593000077],[-85.016940987999988,35.050596322000047],[-85.016810989999954,35.049387762000038],[-85.016791582999986,35.049192290000065],[-85.016704284999946,35.048233094000068],[-85.016667332999987,35.047690858000067],[-85.016655087999936,35.047147865000056],[-85.016672011999958,35.046515113000055],[-85.016722481999977,35.045883572000037],[-85.016806398999961,35.045254441000054],[-85.016923602999952,35.044628919000047],[-85.01707387099998,35.044008197000039],[-85.017256914999962,35.043393456000047],[-85.017472386999941,35.042785866000031],[-85.017719875999944,35.042186584000035],[-85.017998908999971,35.041596749000064],[-85.018308955999942,35.041017486000044],[-85.018649424999978,35.040449895000052],[-85.019019668999988,35.039895057000024],[-85.019418980999944,35.039354029000037],[-85.019846600999983,35.038827839000078],[-85.020301715999949,35.038317489000065],[-85.020783457999983,35.037823951000064],[-85.021290909999948,35.037348163000047],[-85.021823105999943,35.036891031000039],[-85.022379033999982,35.036453425000047],[-85.022957633999965,35.036036177000028],[-85.023557805999985,35.035640081000054],[-85.024178406999965,35.035265891000051],[-85.024818255999946,35.034914319000052],[-85.025476135999952,35.034586034000029],[-85.026150793999989,35.03428166100008],[-85.026840946999982,35.034001778000061],[-85.027545280999959,35.033746919000066],[-85.028262456999983,35.033517568000036],[-85.028991108999946,35.033314161000078],[-85.029729851999946,35.033137085000078],[-85.030477278999967,35.032986679000032],[-85.031231967999986,35.032863226000075],[-85.031992483999943,35.032766963000029],[-85.032757379999964,35.032698073000063],[-85.033525199999985,35.032656686000053],[-85.034294483999986,35.032642882000061],[-85.035063767999986,35.032656686000053],[-85.035831587999951,35.032698073000063],[-85.036596483999972,35.032766963000029],[-85.037356999999986,35.032863226000075],[-85.038111688999948,35.032986679000032],[-85.038859115999969,35.033137085000078],[-85.039597858999969,35.033314161000078],[-85.040326510999989,35.033517568000036],[-85.041043686999956,35.033746919000066],[-85.041748020999989,35.034001778000061],[-85.042438173999983,35.03428166100008],[-85.043112831999963,35.034586034000029],[-85.043770711999969,35.034914319000052],[-85.04441056099995,35.035265891000051],[-85.045031161999987,35.035640081000054],[-85.04563133399995,35.036036177000028],[-85.04620993399999,35.036453425000047],[-85.046765861999972,35.036891031000039],[-85.047298057999967,35.037348163000047],[-85.047805509999989,35.037823951000064],[-85.048287251999966,35.038317489000065],[-85.048742366999988,35.038827839000078],[-85.049169986999971,35.039354029000037],[-85.049569298999984,35.039895057000024],[-85.049939542999937,35.040449895000052],[-85.050280011999973,35.041017486000044],[-85.050590058999944,35.041596749000064],[-85.050869091999971,35.042186584000035],[-85.051116580999974,35.042785866000031],[-85.051332052999953,35.043393456000047],[-85.051515096999935,35.044008197000039],[-85.051665364999963,35.044628919000047],[-85.051796510999964,35.045343542000069],[-85.051884217999941,35.046062650000067],[-85.051962980999974,35.046924020000063],[-85.052080453999963,35.048011802000076],[-85.052285458999961,35.049843469000052],[-85.052466422999942,35.051467235000075],[-85.052581513999939,35.052506633000064],[-85.052753371999984,35.054065100000059],[-85.053166991999944,35.053931187000046],[-85.053597430999957,35.053797129000031],[-85.053682653999942,35.053771831000063],[-85.055917846999989,35.05311361400004],[-85.056626389999963,35.052918771000066],[-85.057344325999964,35.052748770000051],[-85.058070369999939,35.052603914000031],[-85.058803218999969,35.052484463000042],[-85.05969698399997,35.052374220000047],[-85.060596440999973,35.052301757000066],[-85.062286922999988,35.052201420000074],[-85.063483757999961,35.052163891000077],[-85.065014907999966,35.052158636000058],[-85.06651076199995,35.052138466000031],[-85.066693580999981,35.05213677900008],[-85.068321398999956,35.052128682000046],[-85.068428271999949,35.052128415000027],[-85.069371061999959,35.052149144000055],[-85.070170141999938,35.052184301000068],[-85.071094473999949,35.052131594000059],[-85.072020581999936,35.052098851000039],[-85.07344360899998,35.052079302000038],[-85.073711616999958,35.052077293000025],[-85.075352962999943,35.052075229000025],[-85.076620048999985,35.052065218000052],[-85.079018064999957,35.052043136000066],[-85.079178946999946,35.05204225600005],[-85.080385423999985,35.052040175000059],[-85.080422531999943,35.052040143000056],[-85.081369329999973,35.052061049000031],[-85.081575555999962,35.052070161000074],[-85.082024782999952,35.051610012000026],[-85.082514033999985,35.051150657000051],[-85.083026354999959,35.05070863800006],[-85.085199323999973,35.048911098000076],[-85.087828563999949,35.046735960000035],[-85.090759117999937,35.044311336000078],[-85.091333858999974,35.043856817000062],[-85.091932981999946,35.043424122000033],[-85.092533207999963,35.043028027000048],[-85.093153864999977,35.042653837000046],[-85.09379377199997,35.042302266000036],[-85.094451710999977,35.041973982000059],[-85.094620105999979,35.041895050000051],[-85.097454468999956,35.040583359000038],[-85.098132607999958,35.040269495000075],[-85.099146495999946,35.038620707000064],[-85.101705501999959,35.034464762000027],[-85.103617135999968,35.031356824000056],[-85.105353082999954,35.028537049000079],[-85.106373633999965,35.026879221000058],[-85.107974045999981,35.024279282000066],[-85.108436148999942,35.023577179000029],[-85.108835380999949,35.023036149000063],[-85.109262916999967,35.022509958000057],[-85.109717940999985,35.021999607000055],[-85.110199586999954,35.021506067000075],[-85.111003887999971,35.020770250000055],[-85.11186728399997,35.020081248000054],[-85.114554050999971,35.018078784000068],[-85.114754527999935,35.017929354000046],[-85.11613088699994,35.015383517000032],[-85.117649673999949,35.012574029000064],[-85.118237384999986,35.011486784000056],[-85.118392596999968,35.010559372000046],[-85.118496199999981,35.010016585000074],[-85.118646403999946,35.009395859000051],[-85.118829370999947,35.008781114000044],[-85.119044751999979,35.00817352100006],[-85.119292135999956,35.00757423500005],[-85.119675476999987,35.006781438000075],[-85.120114795999939,35.006008555000051],[-85.121776787999977,35.003295430000037],[-85.122253488999945,35.002569354000059],[-85.12265261999994,35.002028322000058],[-85.123080045999984,35.001502129000073],[-85.123534952999989,35.000991776000035],[-85.124016475999952,35.000498235000066],[-85.124523697999962,35.000022444000024],[-85.125055651999958,34.999565309000047],[-85.125611326999945,34.999127700000031],[-85.12618966399998,34.998710449000043],[-85.126789562999988,34.998314351000033],[-85.127409881999938,34.997940158000063],[-85.128049440999973,34.997588584000027],[-85.128707021999958,34.997260297000025],[-85.128781526999944,34.99722510600003],[-85.132460220999974,34.995497259000047],[-85.133117390999985,34.995203602000061],[-85.133789099999944,34.994933141000047],[-85.134474139999952,34.994686363000028],[-85.135171277999973,34.994463711000037],[-85.135844530999975,34.994274666000024],[-85.136526500999935,34.994108124000036],[-85.137216078999984,34.993964356000049],[-85.137912141999948,34.993843596000033],[-85.142276852999942,34.993161654000062],[-85.143228443999988,34.993012942000064],[-85.143404843999974,34.992529863000073],[-85.143623185999957,34.99200550200004],[-85.143902048999962,34.991415662000065],[-85.144211905999953,34.990836394000041],[-85.144552166999972,34.990268798000045],[-85.144922183999938,34.98971395600006],[-85.145321251999974,34.989172923000069],[-85.145748611999977,34.988646729000038],[-85.146203447999937,34.988136375000067],[-85.146684895999954,34.987642832000063],[-85.147361796999974,34.987016761000064],[-85.148081488999935,34.986423899000044],[-85.148684873999969,34.985954756000069],[-85.149461201999941,34.985385840000049],[-85.150061003999951,34.98498974000006],[-85.150681222999935,34.984615547000033],[-85.15132067799999,34.984263973000054],[-85.15197815199997,34.983935685000063],[-85.152652393999972,34.983631309000032],[-85.15334212199997,34.983351424000034],[-85.154046021999989,34.983096562000071],[-85.154762755999968,34.982867209000062],[-85.155490958999962,34.982663800000068],[-85.156229245999953,34.982486723000079],[-85.15697621299995,34.982336315000055],[-85.157730436999941,34.98221286200004],[-85.158490484999959,34.982116598000061],[-85.159254908999969,34.982047707000049],[-85.160022255999991,34.982006320000039],[-85.160791065999945,34.981992515000059],[-85.161559875999956,34.982006320000039],[-85.162327222999977,34.982047707000049],[-85.163091646999987,34.982116598000061],[-85.163851694999948,34.98221286200004],[-85.164605918999939,34.982336315000055],[-85.165352885999937,34.982486723000079],[-85.166091172999984,34.982663800000068],[-85.166819375999978,34.982867209000062],[-85.167536109999958,34.983096562000071],[-85.168240009999977,34.983351424000034],[-85.168929737999974,34.983631309000032],[-85.169603979999977,34.983935685000063],[-85.170261453999956,34.984263973000054],[-85.170900908999954,34.984615547000033],[-85.171521127999938,34.98498974000006],[-85.172120929999949,34.985385840000049],[-85.172699172999955,34.985803091000037],[-85.173254757999985,34.986240701000042],[-85.173786625999981,34.986697838000055],[-85.174293764999959,34.987173630000029],[-85.17477520999995,34.987667172000045],[-85.175230043999989,34.988177526000072],[-85.175657400999967,34.988703720000046],[-85.176056466999967,34.989244753000037],[-85.176426480999964,34.989799596000069],[-85.176766740999938,34.990367191000075],[-85.177076595999949,34.990946460000032],[-85.177355457999965,34.991536299000074],[-85.177602793999938,34.992135587000064],[-85.17781813199997,34.992743182000027],[-85.178001063999943,34.99335792800008],[-85.178151237999941,34.993978656000024],[-85.178268369999955,34.994604183000035],[-85.178352234999977,34.995233318000032],[-85.178402672999937,34.995864866000034],[-85.178419586999951,34.996497622000049],[-85.17840294399997,34.997130383000069],[-85.17835277599994,34.997761945000036],[-85.178269174999969,34.998391105000053],[-85.178152301999944,34.999016665000056],[-85.178002377999974,34.999637434000078],[-85.177819687999943,35.000252231000047],[-85.177604577999944,35.000859886000057],[-85.177357456999971,35.001459240000031],[-85.177078795999989,35.002049154000076],[-85.176800836999973,35.00256229300004],[-85.176772551999989,35.002629583000044],[-85.176629123999987,35.003097341000057],[-85.176435480999942,35.003628217000028],[-85.17621732799995,35.004152619000024],[-85.17619334699998,35.004206527000065],[-85.175455923999948,35.005854093000039],[-85.174567570999955,35.007838765000031],[-85.173483590999979,35.010260345000063],[-85.172760266999944,35.011876151000024],[-85.172485497999958,35.012451786000042],[-85.172181153999986,35.013017262000062],[-85.17184778699999,35.013571550000052],[-85.171486002999984,35.014113644000076],[-85.171087011999987,35.014654774000064],[-85.170659705999981,35.01518106900005],[-85.170204895999973,35.015691527000058],[-85.169723448999946,35.016185177000068],[-85.169216281999979,35.016661077000037],[-85.16868435799995,35.017118322000044],[-85.168128691999982,35.017556042000024],[-85.167550339999934,35.017973402000052],[-85.166950402999987,35.018369608000057],[-85.166330024999979,35.018743906000054],[-85.165690385999937,35.019095582000034],[-85.165032702999952,35.01942396700008],[-85.164358229999948,35.019728435000047],[-85.163668249999944,35.020008407000034],[-85.16296407699997,35.020263349000061],[-85.162247052999987,35.020492777000072],[-85.161518542999943,35.02069625200005],[-85.160779933999947,35.020873388000041],[-85.160032631999968,35.021023847000038],[-85.159278061999942,35.021147342000063],[-85.158517659999973,35.021243639000033],[-85.157752873999982,35.02131255300003],[-85.156985160999966,35.021353955000052],[-85.156215982999981,35.021367764000047],[-85.155976242999941,35.021366423000075],[-85.152772305999974,35.021330538000029],[-85.151514764999945,35.021317456000077],[-85.151477726999985,35.021392969000033],[-85.149875305999956,35.024359536000077],[-85.148357410999949,35.027169407000031],[-85.146945832999961,35.029782281000053],[-85.145469606999939,35.032514608000042],[-85.145070588999943,35.033203671000024],[-85.144628054999941,35.033874517000072],[-85.144228967999936,35.034415645000024],[-85.14380155899994,35.034941939000078],[-85.143346639999947,35.03545239500005],[-85.142865076999954,35.035946043000024],[-85.142061214999956,35.036681730000055],[-85.141198251999981,35.037370645000067],[-85.138238580999939,35.039577161000068],[-85.137970516999985,35.039776992000043],[-85.137844640999958,35.03998161100003],[-85.136824553999986,35.041639714000041],[-85.135093168999958,35.044453826000051],[-85.133181309999941,35.047564057000045],[-85.130625393999935,35.051717562000078],[-85.129304160999936,35.053867478000029],[-85.127622222999946,35.056594203000031],[-85.127168350999966,35.057283189000032],[-85.126769149999973,35.057824315000062],[-85.126341618999959,35.058350607000079],[-85.125886569999977,35.058861061000073],[-85.125404869999954,35.059354707000068],[-85.124701303999984,35.060003787000028],[-85.123427803999959,35.061110018000079],[-85.12271237799996,35.06169684200006],[-85.121957252999948,35.062249017000056],[-85.121356992999949,35.062645220000036],[-85.12073627999996,35.063019515000065],[-85.120096294999939,35.063371189000065],[-85.119438257999946,35.063699571000029],[-85.119270978999964,35.063777997000045],[-85.114759238999966,35.065866370000037],[-85.114059060999978,35.066190429000073],[-85.112855141999944,35.067186752000055],[-85.110673430999952,35.068992104000074],[-85.110373588999948,35.069633742000065],[-85.109385464999946,35.071748095000032],[-85.109151738999969,35.072222975000045],[-85.10889776099998,35.07269077400008],[-85.108425142999977,35.073521534000065],[-85.108089177999943,35.074080456000047],[-85.107724305999966,35.074626993000038],[-85.107325020999951,35.075168117000032],[-85.10689739899999,35.075694407000071],[-85.106442253999944,35.076204860000075],[-85.105960451999977,35.076698505000024],[-85.105452910999986,35.077174401000036],[-85.104916091999939,35.077626506000058],[-85.104867861999935,35.077664047000042],[-85.104360094999947,35.078063737000036],[-85.104310784999939,35.078100889000041],[-85.103782316999968,35.078481966000027],[-85.10373109599999,35.078517307000027],[-85.103182846999971,35.078879107000034],[-85.103129899999942,35.078912514000024],[-85.102562827999975,35.079254395000078],[-85.102508341999965,35.079285767000044],[-85.101923438999961,35.079607109000051],[-85.10186760199997,35.079636361000041],[-85.101265899999987,35.07993656900004],[-85.101208899999961,35.079963632000045],[-85.100591462999944,35.080242146000046],[-85.10053348799994,35.080266964000032],[-85.099901414999977,35.080523248000077],[-85.09984265099996,35.080545783000048],[-85.099197070999935,35.08077933800007],[-85.09913770199995,35.080799563000028],[-85.098479774999987,35.081009923000067],[-85.098419978999971,35.081027824000046],[-85.09775089499999,35.081214561000024],[-85.097690850999982,35.081230133000076],[-85.097011821999956,35.081392858000072],[-85.096951701999956,35.081406110000046],[-85.096263964999935,35.081544474000054],[-85.096204297999975,35.081557208000049],[-85.09545019899997,35.081687407000061],[-85.094689235999965,35.081783703000042],[-85.093923884999981,35.081852617000038],[-85.093155605999982,35.081894018000071],[-85.092385859999979,35.081907827000066],[-85.091390719999936,35.081884739000031],[-85.090398748999974,35.081815550000044],[-85.088491276999946,35.081637809000028],[-85.087226156999975,35.081537662000073],[-85.08690594899997,35.081516453000063],[-85.086779766999939,35.081940660000043],[-85.086564443999976,35.082548306000035],[-85.08631707699999,35.083147653000026],[-85.086038138999982,35.083737559000042],[-85.085728158999984,35.084316901000079],[-85.085387725999965,35.084884577000025],[-85.085017488999938,35.085439504000078],[-85.084618150999972,35.085980628000073],[-85.084190472999978,35.086506917000065],[-85.083735267999941,35.08701736900008],[-85.083253402999958,35.087511013000039],[-85.082745793999948,35.087986908000062],[-85.082213408999962,35.088444148000065],[-85.08165725899994,35.088881862000051],[-85.081078403999982,35.089299218000065],[-85.080477945999974,35.089695419000066],[-85.079857027999935,35.090069713000048],[-85.079216831999986,35.09042138500007],[-85.079139778999945,35.09045982400005],[-85.078947926999945,35.090565212000058],[-85.078289670999936,35.090893593000033],[-85.077614609999955,35.091198058000032],[-85.07692402899994,35.091478027000051],[-85.076219242999969,35.091732967000041],[-85.075501592999956,35.091962391000038],[-85.074772447999976,35.092165864000037],[-85.07403319499997,35.092342998000049],[-85.07328524199994,35.092493455000067],[-85.072530013999938,35.092616949000046],[-85.071768948999988,35.092713245000027],[-85.071003496999936,35.092782159000024],[-85.070235113999956,35.092823560000056],[-85.069465265999952,35.092837369000051],[-85.068695417999947,35.092823560000056],[-85.067927034999968,35.092782159000024],[-85.067161582999972,35.092713245000027],[-85.066400517999966,35.092616949000046],[-85.065645289999964,35.092493455000067],[-85.064897336999991,35.092342998000049],[-85.064158083999985,35.092165864000037],[-85.063428938999948,35.091962391000038],[-85.062711288999935,35.091732967000041],[-85.062006502999964,35.091478027000051],[-85.061315921999949,35.091198058000032],[-85.060640860999968,35.090893593000033],[-85.059982604999959,35.090565212000058],[-85.059342407999964,35.090213540000036],[-85.058721488999936,35.089839247000043]]]}]}");
#else

                WebRequest webRequest = WebRequest.Create($"{m_configuration["ARCGIS:Proxy"]}?{m_configuration["ARCGIS:Host"]}{m_configuration["ARCGIS:BufferEndpoint"]}");
                webRequest.Method = "POST";
                using (StreamWriter writer = new StreamWriter(webRequest.GetRequestStream())) {
                    string json = 
                        "{" + 
                            "\"inSR\": \"4326\", "+
                            "\"unit\":\"9093\"," +
                            "\"geodesic\":\"true\"," +
                            "\"f\":\"pjson\"," +
                            "\"unionResults\":\"true\"," +
                            "\"distances\":\""+ postData.Radius + "\"," +
                            "\"geometries\":\""+ postData.LineJSON + "\"," +

                        "}";

                    writer.Write(json);
                }

                HttpWebResponse response = (HttpWebResponse)webRequest.GetResponse();
                Stream dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream);
                string responseData = reader.ReadToEnd();

                reader.Close();
                dataStream.Close();
                response.Close();

                return Ok(responseData);

#endif
            }
        }

    }
}