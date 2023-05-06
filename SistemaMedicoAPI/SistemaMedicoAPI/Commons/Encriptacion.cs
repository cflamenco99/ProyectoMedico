using System;
using System.IO;
using System.Security.Cryptography;

namespace SistemaMedicoAPI.Commons
{
    public class Encriptacion
    {
        private static readonly byte[] clave = new byte[32] { 0x5F, 0xD0, 0x23, 0x12, 0x55, 0x46, 0xA8, 0x7F, 0x93, 0x2B, 0x7D, 0x19, 0xEE, 0x3A, 0xA1, 0x84, 0x2E, 0x67, 0xB3, 0x7C, 0x8E, 0x0B, 0xA2, 0x9E, 0x6F, 0x55, 0x7B, 0xD1, 0x21, 0x7E, 0x10, 0x5A };
        private static readonly byte[] iv = new byte[16] { 0x9F, 0x4A, 0x2D, 0x8A, 0x33, 0x97, 0x61, 0x4E, 0xA2, 0x7B, 0xE3, 0x3A, 0x5D, 0x72, 0x19, 0xBD };

        public static string Encriptar(string texto)
        {
            using (Aes aes = Aes.Create())
            {
                aes.Key = clave;
                aes.IV = iv;

                byte[] textoBytes = System.Text.Encoding.UTF8.GetBytes(texto);

                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, aes.CreateEncryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(textoBytes, 0, textoBytes.Length);
                        cs.FlushFinalBlock();
                    }

                    byte[] textoEncriptadoBytes = ms.ToArray();

                    return Convert.ToBase64String(textoEncriptadoBytes);
                }
            }
        }

        public static string Desencriptar(string textoEncriptado)
        {
            using (Aes aes = Aes.Create())
            {
                aes.Key = clave;
                aes.IV = iv;

                byte[] textoEncriptadoBytes = Convert.FromBase64String(textoEncriptado);

                using (MemoryStream ms = new MemoryStream())
                {
                    using (CryptoStream cs = new CryptoStream(ms, aes.CreateDecryptor(), CryptoStreamMode.Write))
                    {
                        cs.Write(textoEncriptadoBytes, 0, textoEncriptadoBytes.Length);
                        cs.FlushFinalBlock();
                    }

                    byte[] textoBytes = ms.ToArray();

                    return System.Text.Encoding.UTF8.GetString(textoBytes);
                }
            }
        }
    }
}
