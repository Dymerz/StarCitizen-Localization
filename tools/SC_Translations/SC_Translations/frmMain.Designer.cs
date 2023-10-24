namespace SC_Translations
{
    partial class frmMain
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            ofd = new OpenFileDialog();
            btENLoad = new Button();
            txtENPath = new TextBox();
            txtLangPath = new TextBox();
            btLANGLoad = new Button();
            btUpgrade = new Button();
            sfd = new SaveFileDialog();
            SuspendLayout();
            // 
            // ofd
            // 
            ofd.DefaultExt = "ini";
            ofd.FileName = "ofd";
            ofd.Title = "Select INI File";
            // 
            // btENLoad
            // 
            btENLoad.Location = new Point(593, 12);
            btENLoad.Name = "btENLoad";
            btENLoad.Size = new Size(75, 23);
            btENLoad.TabIndex = 0;
            btENLoad.Text = "Load";
            btENLoad.UseVisualStyleBackColor = true;
            btENLoad.Click += btENLoad_Click;
            // 
            // txtENPath
            // 
            txtENPath.Location = new Point(12, 12);
            txtENPath.Name = "txtENPath";
            txtENPath.PlaceholderText = "New English Global File Version";
            txtENPath.Size = new Size(575, 23);
            txtENPath.TabIndex = 1;
            // 
            // txtLangPath
            // 
            txtLangPath.Location = new Point(12, 41);
            txtLangPath.Name = "txtLangPath";
            txtLangPath.PlaceholderText = "Last Language Global File";
            txtLangPath.Size = new Size(575, 23);
            txtLangPath.TabIndex = 1;
            // 
            // btLANGLoad
            // 
            btLANGLoad.Location = new Point(593, 41);
            btLANGLoad.Name = "btLANGLoad";
            btLANGLoad.Size = new Size(75, 23);
            btLANGLoad.TabIndex = 0;
            btLANGLoad.Text = "Load";
            btLANGLoad.UseVisualStyleBackColor = true;
            btLANGLoad.Click += btLANGLoad_Click;
            // 
            // btUpgrade
            // 
            btUpgrade.Location = new Point(267, 76);
            btUpgrade.Name = "btUpgrade";
            btUpgrade.Size = new Size(131, 45);
            btUpgrade.TabIndex = 0;
            btUpgrade.Text = "UPGRADE";
            btUpgrade.UseVisualStyleBackColor = true;
            btUpgrade.Click += btUpgrade_Click;
            // 
            // sfd
            // 
            sfd.FileName = "newglobal.ini";
            sfd.Title = "New Global File";
            // 
            // frmMain
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(680, 133);
            Controls.Add(txtLangPath);
            Controls.Add(btUpgrade);
            Controls.Add(btLANGLoad);
            Controls.Add(txtENPath);
            Controls.Add(btENLoad);
            Name = "frmMain";
            Text = "Star Citizen Translation Tool";
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private OpenFileDialog ofd;
        private Button btENLoad;
        private TextBox txtENPath;
        private TextBox txtLangPath;
        private Button btLANGLoad;
        private Button btUpgrade;
        private SaveFileDialog sfd;
    }
}