from random import random
def get_job_dict(filename):
    job_dict = {}
    file = open(filename)
    lines = file.readlines()[1:]
    for line in lines:
        pair = line.rsplit(',', 1)
        name = pair[0].replace('"', '')
        percentage = float(pair[1])
        job_dict[name] = percentage
    job_dict.pop('Total')
    return job_dict
def random_job(job_dict):
    percentage = random() * 100
    for job in job_dict:
        percentage -= job_dict[job]
        if percentage <= 0:
            return job
    return 'Unemployed'
print(random_job(get_job_dict('occupations.csv')))
