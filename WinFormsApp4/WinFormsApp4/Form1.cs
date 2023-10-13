using System.Reflection.Emit;

namespace WinFormsApp4
{
    public partial class Form1 : Form
    {
        string num2;
        double number1;
        double number2;
        bool num1 = true;
        public Form1()
        {
            InitializeComponent();
        }



        private void tableLayoutPanel1_Paint(object sender, PaintEventArgs e)
        {

        }


        private void buttonC_Click(object sender, EventArgs e)
        {
            textBox1.Text = "0";
            label1.Text = String.Empty;
            num2 = String.Empty;
            num1 = true;
        }

        private void buttonCE_Click(object sender, EventArgs e)
        {
            textBox1.Text = "0";
            num1 = true;
        }

        private void buttonBackspace_Click(object sender, EventArgs e)
        {
            if (textBox1.Text.Length == 1)
            {
                textBox1.Text = "0";
            }
            else
            {
                textBox1.Text = textBox1.Text.Remove(textBox1.Text.Length - 1);
            }
        }

        private void buttonDivide_Click(object sender, EventArgs e)
        {
            Action("/");
        }

        private void buttonMultiply_Click(object sender, EventArgs e)
        {
            Action("*");
        }

        private void buttonSubtract_Click(object sender, EventArgs e)
        {
            Action("-");
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            Action("+");
        }

        private void buttonEqual_Click(object sender, EventArgs e)
        {
            number2 = Convert.ToDouble(textBox1.Text);
            label1.Text = String.Empty;
            switch (num2)
            {
                case "+":
                    textBox1.Text = Convert.ToString(number1 + number2);
                    break;
                case "-":
                    textBox1.Text = Convert.ToString(number1 - number2);
                    break;
                case "*":
                    textBox1.Text = Convert.ToString(number1 * number2);
                    break;
                case "/":
                    if (number2 == 0)
                    {
                        textBox1.Text = "can't divide by zero";
                    }
                    else
                    {
                        textBox1.Text = Convert.ToString(number1 / number2);

                    }
                    break;

            }
            num2 = String.Empty;
            num1 = true;
        }

        private void buttonOpposite_Click(object sender, EventArgs e)
        {
            textBox1.Text = Convert.ToString(Convert.ToInt64(textBox1.Text) * -1);
        }

        private void buttonDot_Click(object sender, EventArgs e)
        {
            if (textBox1.Text.IndexOf(',') == -1)
            {
                textBox1.Text += ",";
                num1 = false;
            }
        }

        private void button0_Click(object sender, EventArgs e)
        {
            NumberClick("0");
        }

        private void button1_Click(object sender, EventArgs e)
        {
            NumberClick("1");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            NumberClick("2");
        }

        private void button3_Click(object sender, EventArgs e)
        {
            NumberClick("3");
        }

        private void button4_Click(object sender, EventArgs e)
        {
            NumberClick("4");
        }

        private void button5_Click(object sender, EventArgs e)
        {
            NumberClick("5");
        }

        private void button6_Click(object sender, EventArgs e)
        {
            NumberClick("6");
        }
        private void button7_Click(object sender, EventArgs e)
        {
            NumberClick("7");
        }

        private void button8_Click(object sender, EventArgs e)
        {
            NumberClick("8");
        }

        private void button9_Click(object sender, EventArgs e)
        {
            NumberClick("9");
        }
        private void NumberClick(string number)
        {
            if (num1 == false)
            {
                textBox1.Text += number;
            }
            else
            {
                textBox1.Text = number;
                num1 = false;
            }
        }
        private void Action(string num2)
        {
            number1 = Convert.ToDouble(textBox1.Text);
            label1.Text = textBox1.Text;
            label1.Text += num2;
            this.num2 = num2;
            num1 = true;

        }
    }


}

