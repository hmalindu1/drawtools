CREATE OR REPLACE FUNCTION public.get_parcel(
	_id integer)
    RETURNS json
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE
    _parcel JSON;
BEGIN

    SELECT coalesce(row_to_json(rec), '{}'::JSON)
    INTO _parcel
    FROM (
             SELECT *,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.taxation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS taxation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.surveydatasource WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS surveydatasource,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.relationship WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS relationship,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.personsinformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS personsinformation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.parcelinformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS parcelinformation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.natureofrights WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS natureofrights,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.licensefees WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS licensefees,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.landusersinformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS landusersinformation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.landinformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS landinformation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.lalevel WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS lalevel,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.groupunitinformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS groupunitinformation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.buildinginformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS buildinginformation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.basicadministrativeinformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS basicadministrativeinformation,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.assessmentstatus WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS assessmentstatus,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.approvalstatus WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS approvalstatus,
				(SELECT coalesce(row_to_json(i), '{}'::JSON)
				 FROM (
						SELECT * FROM public.adminsourceinformation WHERE "SUID" = allparcelsnew.id LIMIT 1
					  ) i) AS adminsourceinformation
             FROM public.allparcelsnew WHERE gid = _id
         ) rec;

    RETURN _parcel;
END;
$BODY$;
