

- *entName: string (nome do comércio)
- *entType: string (empresa, produtor, serviços) 
- *perName: string (nome da pessoa que entrou em contato)
- *ifValidated: boolean (se foi validado pelo produtor/empresa)
- obs: string (observações)
- entDifficulties (principais dificuldades)
  
- entProducts: json (produtos)

    .: maçã: 5.0
    .: arroz5kg: 6.99 

- entServices: json (serviços)

    .: manicure: 20
    .: servicos_eletricos: 50

- entInfo:json (informações gerais)

    - address{}
    - email{}
    - phone{}
    - site
    - cnpj

- paymentInfo: json

    - methods{} (exemplo: ifood{site:ifood.com}, ubereats{site:ubereats.com})
  
- entDeliverInfo: json (informações de entrega)

    - ifDeliver (se faz entrega)
    - location (quais locais faz entrega)
    - methods (quais as formas de entrega (ifood, ubereats, drive-thru))

- createdAt: Date (data de inserção)