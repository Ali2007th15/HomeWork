namespace WinFormsApp4
{
    partial class Form1
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
            tableLayoutPanel2 = new TableLayoutPanel();
            buttonC = new Button();
            buttonCE = new Button();
            buttonBackspace = new Button();
            buttonDivide = new Button();
            button7 = new Button();
            button8 = new Button();
            button9 = new Button();
            buttonMultiply = new Button();
            button4 = new Button();
            button5 = new Button();
            button6 = new Button();
            buttonSubtract = new Button();
            button1 = new Button();
            button2 = new Button();
            button3 = new Button();
            buttonAdd = new Button();
            buttonOpposite = new Button();
            button0 = new Button();
            buttonDot = new Button();
            buttonEqual = new Button();
            textBox1 = new TextBox();
            label1 = new Label();
            tableLayoutPanel1 = new TableLayoutPanel();
            tableLayoutPanel2.SuspendLayout();
            tableLayoutPanel1.SuspendLayout();
            SuspendLayout();
            // 
            // tableLayoutPanel2
            // 
            tableLayoutPanel2.BackColor = Color.Black;
            tableLayoutPanel2.ColumnCount = 4;
            tableLayoutPanel2.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 25F));
            tableLayoutPanel2.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 25F));
            tableLayoutPanel2.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 25F));
            tableLayoutPanel2.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 25F));
            tableLayoutPanel2.Controls.Add(buttonEqual, 3, 4);
            tableLayoutPanel2.Controls.Add(buttonDot, 2, 4);
            tableLayoutPanel2.Controls.Add(button0, 1, 4);
            tableLayoutPanel2.Controls.Add(buttonOpposite, 0, 4);
            tableLayoutPanel2.Controls.Add(buttonAdd, 3, 3);
            tableLayoutPanel2.Controls.Add(button3, 2, 3);
            tableLayoutPanel2.Controls.Add(button2, 1, 3);
            tableLayoutPanel2.Controls.Add(button1, 0, 3);
            tableLayoutPanel2.Controls.Add(buttonSubtract, 3, 2);
            tableLayoutPanel2.Controls.Add(button6, 2, 2);
            tableLayoutPanel2.Controls.Add(button5, 1, 2);
            tableLayoutPanel2.Controls.Add(button4, 0, 2);
            tableLayoutPanel2.Controls.Add(buttonMultiply, 3, 1);
            tableLayoutPanel2.Controls.Add(button9, 2, 1);
            tableLayoutPanel2.Controls.Add(button8, 1, 1);
            tableLayoutPanel2.Controls.Add(button7, 0, 1);
            tableLayoutPanel2.Controls.Add(buttonDivide, 3, 0);
            tableLayoutPanel2.Controls.Add(buttonBackspace, 2, 0);
            tableLayoutPanel2.Controls.Add(buttonCE, 1, 0);
            tableLayoutPanel2.Controls.Add(buttonC, 0, 0);
            tableLayoutPanel2.Dock = DockStyle.Fill;
            tableLayoutPanel2.Font = new Font("Arial Black", 16.2F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            tableLayoutPanel2.ForeColor = Color.Green;
            tableLayoutPanel2.Location = new Point(3, 113);
            tableLayoutPanel2.Name = "tableLayoutPanel2";
            tableLayoutPanel2.RowCount = 5;
            tableLayoutPanel2.RowStyles.Add(new RowStyle(SizeType.Percent, 20F));
            tableLayoutPanel2.RowStyles.Add(new RowStyle(SizeType.Percent, 20F));
            tableLayoutPanel2.RowStyles.Add(new RowStyle(SizeType.Percent, 20F));
            tableLayoutPanel2.RowStyles.Add(new RowStyle(SizeType.Percent, 20F));
            tableLayoutPanel2.RowStyles.Add(new RowStyle(SizeType.Percent, 20F));
            tableLayoutPanel2.Size = new Size(374, 439);
            tableLayoutPanel2.TabIndex = 2;
            // 
            // buttonC
            // 
            buttonC.BackColor = Color.FromArgb(255, 128, 0);
            buttonC.Dock = DockStyle.Fill;
            buttonC.FlatAppearance.BorderSize = 0;
            buttonC.FlatStyle = FlatStyle.Flat;
            buttonC.ForeColor = Color.Black;
            buttonC.Location = new Point(3, 3);
            buttonC.Name = "buttonC";
            buttonC.Size = new Size(87, 81);
            buttonC.TabIndex = 0;
            buttonC.Text = "C";
            buttonC.UseVisualStyleBackColor = false;
            buttonC.Click += buttonC_Click;
            // 
            // buttonCE
            // 
            buttonCE.BackColor = Color.FromArgb(255, 128, 0);
            buttonCE.Dock = DockStyle.Fill;
            buttonCE.FlatAppearance.BorderSize = 0;
            buttonCE.FlatStyle = FlatStyle.Flat;
            buttonCE.ForeColor = Color.Black;
            buttonCE.Location = new Point(96, 3);
            buttonCE.Name = "buttonCE";
            buttonCE.Size = new Size(87, 81);
            buttonCE.TabIndex = 1;
            buttonCE.Text = "CE";
            buttonCE.UseVisualStyleBackColor = false;
            buttonCE.Click += buttonCE_Click;
            // 
            // buttonBackspace
            // 
            buttonBackspace.BackColor = Color.FromArgb(255, 128, 0);
            buttonBackspace.Dock = DockStyle.Fill;
            buttonBackspace.FlatAppearance.BorderSize = 0;
            buttonBackspace.FlatStyle = FlatStyle.Flat;
            buttonBackspace.ForeColor = Color.Black;
            buttonBackspace.Location = new Point(189, 3);
            buttonBackspace.Name = "buttonBackspace";
            buttonBackspace.Size = new Size(87, 81);
            buttonBackspace.TabIndex = 2;
            buttonBackspace.Text = "<=";
            buttonBackspace.UseVisualStyleBackColor = false;
            buttonBackspace.Click += buttonBackspace_Click;
            // 
            // buttonDivide
            // 
            buttonDivide.BackColor = Color.FromArgb(255, 128, 0);
            buttonDivide.Dock = DockStyle.Fill;
            buttonDivide.FlatAppearance.BorderSize = 0;
            buttonDivide.FlatStyle = FlatStyle.Flat;
            buttonDivide.ForeColor = Color.Black;
            buttonDivide.Location = new Point(282, 3);
            buttonDivide.Name = "buttonDivide";
            buttonDivide.Size = new Size(89, 81);
            buttonDivide.TabIndex = 3;
            buttonDivide.Text = ":";
            buttonDivide.UseVisualStyleBackColor = false;
            buttonDivide.Click += buttonDivide_Click;
            // 
            // button7
            // 
            button7.BackColor = Color.Black;
            button7.Dock = DockStyle.Fill;
            button7.FlatAppearance.BorderSize = 0;
            button7.FlatStyle = FlatStyle.Flat;
            button7.ForeColor = Color.White;
            button7.Location = new Point(3, 90);
            button7.Name = "button7";
            button7.Size = new Size(87, 81);
            button7.TabIndex = 4;
            button7.Text = "7";
            button7.UseVisualStyleBackColor = false;
            button7.Click += button7_Click;
            // 
            // button8
            // 
            button8.Dock = DockStyle.Fill;
            button8.FlatAppearance.BorderSize = 0;
            button8.FlatStyle = FlatStyle.Flat;
            button8.ForeColor = Color.White;
            button8.Location = new Point(96, 90);
            button8.Name = "button8";
            button8.Size = new Size(87, 81);
            button8.TabIndex = 5;
            button8.Text = "8";
            button8.UseVisualStyleBackColor = true;
            button8.Click += button8_Click;
            // 
            // button9
            // 
            button9.Dock = DockStyle.Fill;
            button9.FlatAppearance.BorderSize = 0;
            button9.FlatStyle = FlatStyle.Flat;
            button9.ForeColor = Color.White;
            button9.Location = new Point(189, 90);
            button9.Name = "button9";
            button9.Size = new Size(87, 81);
            button9.TabIndex = 6;
            button9.Text = "9";
            button9.UseVisualStyleBackColor = true;
            button9.Click += button9_Click;
            // 
            // buttonMultiply
            // 
            buttonMultiply.BackColor = Color.FromArgb(255, 128, 0);
            buttonMultiply.Dock = DockStyle.Fill;
            buttonMultiply.FlatAppearance.BorderSize = 0;
            buttonMultiply.FlatStyle = FlatStyle.Flat;
            buttonMultiply.ForeColor = Color.Black;
            buttonMultiply.Location = new Point(282, 90);
            buttonMultiply.Name = "buttonMultiply";
            buttonMultiply.Size = new Size(89, 81);
            buttonMultiply.TabIndex = 7;
            buttonMultiply.Text = "x";
            buttonMultiply.UseVisualStyleBackColor = false;
            buttonMultiply.Click += buttonMultiply_Click;
            // 
            // button4
            // 
            button4.BackColor = Color.Black;
            button4.Dock = DockStyle.Fill;
            button4.FlatAppearance.BorderSize = 0;
            button4.FlatStyle = FlatStyle.Flat;
            button4.ForeColor = Color.White;
            button4.Location = new Point(3, 177);
            button4.Name = "button4";
            button4.Size = new Size(87, 81);
            button4.TabIndex = 8;
            button4.Text = "4";
            button4.UseVisualStyleBackColor = false;
            button4.Click += button4_Click;
            // 
            // button5
            // 
            button5.Dock = DockStyle.Fill;
            button5.FlatAppearance.BorderSize = 0;
            button5.FlatStyle = FlatStyle.Flat;
            button5.ForeColor = Color.White;
            button5.Location = new Point(96, 177);
            button5.Name = "button5";
            button5.Size = new Size(87, 81);
            button5.TabIndex = 9;
            button5.Text = "5";
            button5.UseVisualStyleBackColor = true;
            button5.Click += button5_Click;
            // 
            // button6
            // 
            button6.Dock = DockStyle.Fill;
            button6.FlatAppearance.BorderSize = 0;
            button6.FlatStyle = FlatStyle.Flat;
            button6.ForeColor = Color.White;
            button6.Location = new Point(189, 177);
            button6.Name = "button6";
            button6.Size = new Size(87, 81);
            button6.TabIndex = 10;
            button6.Text = "6";
            button6.UseVisualStyleBackColor = true;
            button6.Click += button6_Click;
            // 
            // buttonSubtract
            // 
            buttonSubtract.BackColor = Color.FromArgb(255, 128, 0);
            buttonSubtract.Dock = DockStyle.Fill;
            buttonSubtract.FlatAppearance.BorderSize = 0;
            buttonSubtract.FlatStyle = FlatStyle.Flat;
            buttonSubtract.ForeColor = Color.Black;
            buttonSubtract.Location = new Point(282, 177);
            buttonSubtract.Name = "buttonSubtract";
            buttonSubtract.Size = new Size(89, 81);
            buttonSubtract.TabIndex = 11;
            buttonSubtract.Text = "-";
            buttonSubtract.UseVisualStyleBackColor = false;
            buttonSubtract.Click += buttonSubtract_Click;
            // 
            // button1
            // 
            button1.Dock = DockStyle.Fill;
            button1.FlatAppearance.BorderSize = 0;
            button1.FlatStyle = FlatStyle.Flat;
            button1.ForeColor = Color.White;
            button1.Location = new Point(3, 264);
            button1.Name = "button1";
            button1.Size = new Size(87, 81);
            button1.TabIndex = 12;
            button1.Text = "1";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // button2
            // 
            button2.Dock = DockStyle.Fill;
            button2.FlatAppearance.BorderSize = 0;
            button2.FlatStyle = FlatStyle.Flat;
            button2.ForeColor = Color.White;
            button2.Location = new Point(96, 264);
            button2.Name = "button2";
            button2.Size = new Size(87, 81);
            button2.TabIndex = 13;
            button2.Text = "2";
            button2.UseVisualStyleBackColor = true;
            button2.Click += button2_Click;
            // 
            // button3
            // 
            button3.Dock = DockStyle.Fill;
            button3.FlatAppearance.BorderSize = 0;
            button3.FlatStyle = FlatStyle.Flat;
            button3.ForeColor = Color.White;
            button3.Location = new Point(189, 264);
            button3.Name = "button3";
            button3.Size = new Size(87, 81);
            button3.TabIndex = 14;
            button3.Text = "3";
            button3.UseVisualStyleBackColor = true;
            button3.Click += button3_Click;
            // 
            // buttonAdd
            // 
            buttonAdd.BackColor = Color.FromArgb(255, 128, 0);
            buttonAdd.Dock = DockStyle.Fill;
            buttonAdd.FlatAppearance.BorderSize = 0;
            buttonAdd.FlatStyle = FlatStyle.Flat;
            buttonAdd.ForeColor = Color.Black;
            buttonAdd.Location = new Point(282, 264);
            buttonAdd.Name = "buttonAdd";
            buttonAdd.Size = new Size(89, 81);
            buttonAdd.TabIndex = 15;
            buttonAdd.Text = "+";
            buttonAdd.UseVisualStyleBackColor = false;
            buttonAdd.Click += buttonAdd_Click;
            // 
            // buttonOpposite
            // 
            buttonOpposite.BackColor = Color.Yellow;
            buttonOpposite.Dock = DockStyle.Fill;
            buttonOpposite.FlatAppearance.BorderSize = 0;
            buttonOpposite.FlatStyle = FlatStyle.Flat;
            buttonOpposite.ForeColor = Color.Black;
            buttonOpposite.Location = new Point(3, 351);
            buttonOpposite.Name = "buttonOpposite";
            buttonOpposite.Size = new Size(87, 85);
            buttonOpposite.TabIndex = 16;
            buttonOpposite.Text = "+/-";
            buttonOpposite.UseVisualStyleBackColor = false;
            buttonOpposite.Click += buttonOpposite_Click;
            // 
            // button0
            // 
            button0.Dock = DockStyle.Fill;
            button0.FlatAppearance.BorderSize = 0;
            button0.FlatStyle = FlatStyle.Flat;
            button0.ForeColor = Color.White;
            button0.Location = new Point(96, 351);
            button0.Name = "button0";
            button0.Size = new Size(87, 85);
            button0.TabIndex = 17;
            button0.Text = "0";
            button0.UseVisualStyleBackColor = true;
            button0.Click += button0_Click;
            // 
            // buttonDot
            // 
            buttonDot.BackColor = Color.Yellow;
            buttonDot.Dock = DockStyle.Fill;
            buttonDot.FlatAppearance.BorderSize = 0;
            buttonDot.FlatStyle = FlatStyle.Flat;
            buttonDot.ForeColor = Color.Black;
            buttonDot.Location = new Point(189, 351);
            buttonDot.Name = "buttonDot";
            buttonDot.Size = new Size(87, 85);
            buttonDot.TabIndex = 18;
            buttonDot.Text = ".";
            buttonDot.UseVisualStyleBackColor = false;
            buttonDot.Click += buttonDot_Click;
            // 
            // buttonEqual
            // 
            buttonEqual.BackColor = Color.SpringGreen;
            buttonEqual.Dock = DockStyle.Fill;
            buttonEqual.FlatAppearance.BorderSize = 0;
            buttonEqual.FlatStyle = FlatStyle.Flat;
            buttonEqual.ForeColor = Color.Black;
            buttonEqual.Location = new Point(282, 351);
            buttonEqual.Name = "buttonEqual";
            buttonEqual.Size = new Size(89, 85);
            buttonEqual.TabIndex = 19;
            buttonEqual.Text = "=";
            buttonEqual.UseVisualStyleBackColor = false;
            buttonEqual.Click += buttonEqual_Click;
            // 
            // textBox1
            // 
            textBox1.BackColor = SystemColors.MenuText;
            textBox1.BorderStyle = BorderStyle.None;
            textBox1.Dock = DockStyle.Fill;
            textBox1.Font = new Font("Arial Black", 16.2F, FontStyle.Bold, GraphicsUnit.Point);
            textBox1.ForeColor = Color.White;
            textBox1.Location = new Point(3, 52);
            textBox1.Multiline = true;
            textBox1.Name = "textBox1";
            textBox1.ReadOnly = true;
            textBox1.Size = new Size(374, 55);
            textBox1.TabIndex = 1;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(3, 0);
            label1.Name = "label1";
            label1.Size = new Size(0, 28);
            label1.TabIndex = 0;
            // 
            // tableLayoutPanel1
            // 
            tableLayoutPanel1.BackColor = SystemColors.ActiveCaptionText;
            tableLayoutPanel1.ColumnCount = 1;
            tableLayoutPanel1.ColumnStyles.Add(new ColumnStyle(SizeType.Percent, 100F));
            tableLayoutPanel1.Controls.Add(label1, 0, 0);
            tableLayoutPanel1.Controls.Add(textBox1, 0, 1);
            tableLayoutPanel1.Controls.Add(tableLayoutPanel2, 0, 2);
            tableLayoutPanel1.Dock = DockStyle.Fill;
            tableLayoutPanel1.Font = new Font("Arial Black", 12F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point);
            tableLayoutPanel1.ForeColor = Color.White;
            tableLayoutPanel1.Location = new Point(0, 0);
            tableLayoutPanel1.Name = "tableLayoutPanel1";
            tableLayoutPanel1.RowCount = 3;
            tableLayoutPanel1.RowStyles.Add(new RowStyle(SizeType.Percent, 9F));
            tableLayoutPanel1.RowStyles.Add(new RowStyle(SizeType.Percent, 11F));
            tableLayoutPanel1.RowStyles.Add(new RowStyle(SizeType.Percent, 80F));
            tableLayoutPanel1.Size = new Size(380, 555);
            tableLayoutPanel1.TabIndex = 0;
            tableLayoutPanel1.Paint += tableLayoutPanel1_Paint;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.Black;
            ClientSize = new Size(380, 555);
            Controls.Add(tableLayoutPanel1);
            Name = "Form1";
            Text = "Calculator";
            tableLayoutPanel2.ResumeLayout(false);
            tableLayoutPanel1.ResumeLayout(false);
            tableLayoutPanel1.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private TableLayoutPanel tableLayoutPanel2;
        private Button buttonEqual;
        private Button buttonDot;
        private Button button0;
        private Button buttonOpposite;
        private Button buttonAdd;
        private Button button3;
        private Button button2;
        private Button button1;
        private Button buttonSubtract;
        private Button button6;
        private Button button5;
        private Button button4;
        private Button buttonMultiply;
        private Button button9;
        private Button button8;
        private Button button7;
        private Button buttonDivide;
        private Button buttonBackspace;
        private Button buttonCE;
        private Button buttonC;
        private TextBox textBox1;
        private Label label1;
        private TableLayoutPanel tableLayoutPanel1;
    }
}