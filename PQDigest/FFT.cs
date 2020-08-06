using MathNet.Numerics.IntegralTransforms;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;

namespace PQDigest
{
    public class FFT
    {
        #region[constructor]

        public FFT(double samplingfreq, double[] data)
        {

            if (data.Count() == 0)
            {
                m_freq = new double[0];
                m_result = new Complex[0];
                return;
            }
            m_freq = Fourier.FrequencyScale(data.Length, samplingfreq);

            m_result = data
                .Select(sample => new Complex(sample, 0))
                .ToArray();

            Fourier.Forward(m_result, FourierOptions.NoScaling);

            int dcIndex = 0;
            int nyquistIndex = m_result.Count() / 2;

            m_result = m_result.Select(number => number * 2.0D).ToArray();

            //adjust first and last bucket (residual and DC)
            m_result[dcIndex] = m_result[dcIndex] / 2.0D;
            m_result[nyquistIndex] = m_result[nyquistIndex] / 2.0D;
            m_result = m_result.Where((value, index) => m_freq[index] >= 0.0D).ToArray();

            //adjust frequency
            m_freq = m_freq.Where(number => number >= 0.0D).ToArray();
        }

        #endregion[constructor]

        #region[Properties]

        private Complex[] m_result;
        private double[] m_freq;

        public double[] Angle
        {
            get { return m_result.Select(number => number.Phase).ToArray(); }
        }
        public double[] Magnitude
        {
            get { return m_result.Select(number => number.Magnitude).ToArray(); }
        }

        public double[] Frequency
        {
            get { return m_freq; }
        }

        #endregion[Properties]
    }
}
