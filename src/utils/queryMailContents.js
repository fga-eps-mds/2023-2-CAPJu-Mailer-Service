export const queryMailContents =
  'select \
f."idFlow" as id_flow, \
f."name" as flow, \
p.record as process_record, \
p.nickname as process, \
s."idStage" as id_stage, \
s."name" as stage, \
p."effectiveDate" as start_date, \
s.duration as stage_duration, \
u.email as email, \
u."fullName" as "name", \
extract(day from (current_timestamp - p."effectiveDate")) - cast(s.duration as integer) as delay_days \
from \
    users u \
join "flowUser" fu on \
    fu.cpf = u.cpf \
join process p on \
    p."idFlow" = fu."idFlow" \
join stage s on \
    s."idStage" = p."idStage" \
join flow f on \
    f."idFlow" = p."idFlow" \
where \
    extract(day from (current_timestamp - p."effectiveDate")) > cast(s.duration as integer)';
