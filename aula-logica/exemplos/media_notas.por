programa
{
	
	funcao inicio ()
	{
		real n1, n2, media

		escreva ("Informe a nota 1: ")
		leia (n1)
		escreva( "Informe a nota 2: ")
		leia (n2)

		media = (n1 + n2)/2
		escreva ("\nA média das notas é: ", media, "\n")

		se (media < 4)
		{
			escreva("Aluno reprovado.\n")
		}
		senao se ((media >= 4) e (media < 6))
		{
			escreva("Aluno deve realizar prova final.\n")
		}
		senao se (media >= 6)
		{
			escreva("Aluno aprovado.\n")
		}
	}
}
