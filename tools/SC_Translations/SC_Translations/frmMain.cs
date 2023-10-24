using System.Text;

namespace SC_Translations
{
    public partial class frmMain : Form
    {
        public frmMain()
        {
            InitializeComponent();
        }

        private void btENLoad_Click(object sender, EventArgs e)
        {
            ofd.ShowDialog(this);
            txtENPath.Text = ofd.FileName;
        }

        private void btLANGLoad_Click(object sender, EventArgs e)
        {
            ofd.ShowDialog(this);
            txtLangPath.Text = ofd.FileName;
        }

        private void btUpgrade_Click(object sender, EventArgs e)
        {
            // Check paths
            if ((txtENPath.Text == "") || (File.Exists(txtENPath.Text)))
            {
                MessageBox.Show("English Global File Not found!", "Star Citizen Translation Tool - Upgrading", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if ((txtLangPath.Text == "") || (File.Exists(txtLangPath.Text)))
            {
                MessageBox.Show("Language Global File Not found!", "Star Citizen Translation Tool - Upgrading", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Prepare paths
            string ENGlobal = txtENPath.Text;
            string LanGlobal = txtLangPath.Text;
            sfd.ShowDialog();
            if (sfd.FileName == "") return;
            string NewGlobal = sfd.FileName;

            // Delete old version
            if (File.Exists(NewGlobal)) File.Delete(NewGlobal);

            // Read file
            string[] lines = File.ReadAllLines(ENGlobal);
            var dictEN = lines.Select(line => line.Split('=', 2)).ToDictionary(split => split[0], split => split[1]);
            lines = File.ReadAllLines(LanGlobal);
            var dictLang = lines.Select(line => line.Split('=', 2)).ToDictionary(split => split[0], split => split[1]);

            // Translate
            foreach (var line in dictLang)
            {
                dictEN[line.Key] = dictLang[line.Key].ToString();
            }

            // Write new global.ini
            StreamWriter sw = new StreamWriter(NewGlobal, false, new UTF8Encoding(true));
            foreach (var item in dictEN)
            {
                sw.Write(item.Key + "=" + item.Value + "\n");
            }
            sw.Close();

            // Show finish message
            MessageBox.Show("Upgrade Finished!", "Star Citizen Translation Tool - Upgrading", MessageBoxButtons.OK);
        }
    }
}