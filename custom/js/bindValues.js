const bindValues = function (id, title, value) {
    $(`#${id}`).html(`
      <div class="row">
        <div class="col-md-4">
          <span class="attr">${title} </span>
        </div>
        <div class="col-md-8">
          <span class="val">${value}</span>
        </div>
      </div>`
    );
  }

function bindAllValues(allData) {
    // if (allData.landinformation && allData.landinformation.photograph && allData.landinformation.photograph != '0') {
    //     $('#land_photo').html(`
    //     <div class="top-img-sec" >
    //       <img src="${allData.landinformation.photograph}" class="w-100" alt="" />
    //     </div>`)
    //   }
    //   if (allData.id) {
        $('#p_overview_p_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Parcel ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.id|| 'N/A'}</span>
            </div>
          </div>`
        );
        $('#grp_unit_informatin_p_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Parcel ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.id}</span>
            </div>
          </div>`
        );
        $('#p_id_').text(allData.id);
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.AssessmentID) {
        $('#p_overview_assessment_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Assessment ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.AssessmentID|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.LabelName) {
        $('#p_overview_label_name_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Name/Label </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.LabelName || 'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.Address) {
        $('#p_overview_address_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Address </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.Address|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.DimensionType) {
        $('#p_overview_dimension_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Dimension Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.DimensionType||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.Area) {
        $('#p_overview_area_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Area </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.Area||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.AreaUnitType) {
        $('#p_overview_areaunit_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Area Unit Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.AreaUnitType||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.AreaSourceType) {
        $('#p_overview_areasource_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Area Source Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.AreaSourceType||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.ReferencePoint_GMPoint) {
        $('#p_overview_gm_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Reference Point(GM Point) </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.ReferencePoint_GMPoint||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.SurfaceRelation) {
        $('#p_overview_surface_relation_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Surface Relation </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.SurfaceRelation||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.LandUseType) {
        $('#p_overview_land_use_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Land Use Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.LandUseType||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.parcelinformation && allData.parcelinformation.SketchReference) {
        $('#p_overview_sketch_ref_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Sketch Reference </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.SketchReference||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.landinformation && allData.landinformation.LandUnitIDLID) {
        $('#l_info_unit_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Land Unit ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.landinformation && allData.landinformation.LandUnitIDLID||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.landinformation && allData.landinformation.LandUnitType) {
        $('#l_info_unit_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Land Unit Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.landinformation && allData.landinformation.LandUnitType||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.landinformation && allData.landinformation.AssessmentID) {
        $('#l_assessment_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Assessment ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.landinformation && allData.landinformation.AssessmentID||'N/A'}</span>
            </div>
          </div>`
        )
    //   }

    //   if (allData.landinformation && allData.landinformation.DevelopmentStatus) {
        $('#l_development_status_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Development Status </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.landinformation && allData.landinformation.DevelopmentStatus == 'Y'?'Under Development':'Developed'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.landinformation && allData.landinformation.AccessRoad) {
        $('#l_access_road_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Access Road </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.landinformation && allData.landinformation.AccessRoad == 'Y' ?'Yes':'No'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.landinformation && allData.landinformation.CultivationType) {
        $('#l_cultivation_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Cultivation Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.landinformation && allData.landinformation.CultivationType||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.landinformation && allData.landinformation.WaterAvailability) {
        $('#l_water_availability_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Water Availability </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.landinformation && allData.landinformation.WaterAvailability =='Y' ?'Available':'No Available'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.BuildingUnitIDBID) {
        $('#b_building_unit_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Building Unit ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.BuildingUnitIDBID||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.BuildingUnitType) {
        $('#b_building_unit_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Building Unit Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.BuildingUnitType||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.HouseholdNameBRName) {
        $('#b_house_hold_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Household Name </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.HouseholdNameBRName||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.PowerStatus) {
        $('#b_power_status_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Power Status </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.PowerStatus||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.WaterDrink) {
        $('#b_water_drink_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Water Drink </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.WaterDrink||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.WaterOther) {
        $('#b_water_other_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Water Other </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.WaterOther||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.Telephone) {
        $('#b_telephone_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Telephone </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.Telephone == 'Y'?'Yes':'No'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.Internet) {
        $('#b_internet_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Internet </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.Internet =='Y' ?'Yes':'No'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.Sanitation) {
        $('#b_sanitation_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Sanitation </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.Sanitation == 'Y' ?'Yes':'No'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.Rooftype) {
        $('#b_roof_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Roof Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.Rooftype||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
    //   if (allData.buildinginformation && allData.buildinginformation.Walltype) {
        $('#b_wall_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Wall Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.Walltype||'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.buildinginformation && allData.buildinginformation.BuildApprovalStatus) {
        $('#b_approval_status_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Build Approval Status </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.buildinginformation && allData.buildinginformation.BuildApprovalStatus||'N/A'}</span>
            </div>
          </div>`
        );
    //   }
      // group unit
    //   if (allData.groupunitinformation && allData.groupunitinformation.Label) {
        $('#grp_unit_informatin_label_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Label </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.groupunitinformation && allData.groupunitinformation.Label|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.groupunitinformation && allData.groupunitinformation.Relationship) {
        $('#grp_unit_informatin_relation_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Relationship </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.groupunitinformation && allData.groupunitinformation.Relationship|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.AdministrativeUnitID) {
        $('#a_admin_unit_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Administrative Unit ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.AdministrativeUnitID|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.BasicAdministrativeUnitType) {
        $('#a_admin_unit_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Basic Administrative Unit Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.BasicAdministrativeUnitType|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.SLMCAdministrativeUnitType) {
        $('#a_slmc_admin_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">SLMC Administrative Unit Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.SLMCAdministrativeUnitType|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.Province) {
        $('#a_province_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Province </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.Province|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.District) {
        $('#a_district_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">District </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.District|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.DSDivision) {
        $('#a_ds_division_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">DS Division </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.DSDivision|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.GNDivision) {
        $('#a_gn_division_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">GN Division</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.GNDivision|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.LIDBID) {
        $('#a_sc_l_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">LID/BID</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.LIDBID|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.DocumentNo) {
        $('#a_sc_doc_no_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Document No</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.DocumentNo|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.DocumentType) {
        $('#a_sc_doc_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Document Type</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.DocumentType|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.AvailabilityStatus) {
        $('#a_sc_avaliability_status_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Availability Status</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.AvailabilityStatus|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.DescriptionText) {
        $('#a_sc_description_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Description</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.DescriptionText|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.DateofAcceptance) {
        $('#a_sc_date_acceptance_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Date Of Acceptance</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.DateofAcceptance|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.ExternalArchiveReference) {
        $('#a_sc_external_archive_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">External Archive Reference</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.ExternalArchiveReference|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.adminsourceinformation && allData.adminsourceinformation.LifespanStamp) {
        $('#a_sc_lifespan_stamp_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Lifespan Stamp</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.adminsourceinformation && allData.adminsourceinformation.LifespanStamp|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.basicadministrativeinformation && allData.basicadministrativeinformation.AdministrativeUnitID) {
        $('#a_re_unit_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Administrative Unit ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.basicadministrativeinformation && allData.basicadministrativeinformation.AdministrativeUnitID|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.natureofrights && allData.natureofrights.RightID) {
        $('#n_right_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Right ID </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.natureofrights && allData.natureofrights.RightID|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.natureofrights && allData.natureofrights.RightType) {
        $('#n_right_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Right Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.natureofrights && allData.natureofrights.RightType|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.natureofrights && allData.natureofrights.Description) {
        $('#n_right_desc_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Description</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.natureofrights && allData.natureofrights.Description|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.parcelinformation && allData.parcelinformation.ReferencePoint_GMPoint) {
        $('#n_right_ref_point_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Reference Point(GM Point) </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.ReferencePoint_GMPoint|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.parcelinformation && allData.parcelinformation.SurfaceRelation) {
        $('#n_right_surface_relation_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Surface Relation </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.SurfaceRelation|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.parcelinformation && allData.parcelinformation.LandUseType) {
        $('#n_right_land_use_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Land Use Type </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.LandUseType|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.parcelinformation && allData.parcelinformation.SketchReference) {
        $('#n_right_sketch_ref_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Sketch Reference </span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.parcelinformation && allData.parcelinformation.SketchReference|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if(allData.natureofrights && allData.natureofrights.Shareportion){
        $('#n_right_share_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Share</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.natureofrights && allData.natureofrights.Shareportion|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if (allData.natureofrights && allData.natureofrights.ShareType) {
        $('#n_right_share_type_id').html(`
          <div class="row">
            <div class="col-md-4">
              <span class="attr">Share Type</span>
            </div>
            <div class="col-md-8">
              <span class="val">${allData.natureofrights && allData.natureofrights.ShareType|| 'N/A'}</span>
            </div>
          </div>`
        );
    //   }

    //   if(allData.personsinformation && allData.personsinformation.NICPID){
        bindValues('personinfo_nic_id','NIC', allData.personsinformation && allData.personsinformation.NICPID || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.Name){
        bindValues('personinfo_name_id','Name', allData.personsinformation && allData.personsinformation.Name || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.TP){
        bindValues('personinfo_tp_id','TP', allData.personsinformation && allData.personsinformation.TP || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.Email){
        bindValues('personinfo_mail_id','Email', allData.personsinformation && allData.personsinformation.Email || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.PersonRole){
        bindValues('personinfo_role_id','Person Role', allData.personsinformation && allData.personsinformation.PersonRole || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.PersonType){
        bindValues('personinfo_p_type_id','Person Type', allData.personsinformation && allData.personsinformation.PersonType || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.Organizations){
        bindValues('personinfo_organization_id','Organization', allData.personsinformation && allData.personsinformation.Organizations|| 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.ExternalPersonID){
        bindValues('personinfo_ex_p_id','External Person ID', allData.personsinformation && allData.personsinformation.ExternalPersonID || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.PersonsGroupNameOptional){
        bindValues('personinfo_g_name_id',"Person's group name ", allData.personsinformation && allData.personsinformation.PersonsGroupNameOptional || 'N/A');
    //   }

    //   if(allData.personsinformation && allData.personsinformation.PersonsGroupTypeOptional){
        bindValues('personinfo_g_type_id',"Person's group type", allData.personsinformation && allData.personsinformation.PersonsGroupTypeOptional || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.LIDBID){
        bindValues('land_info_l_id',"LID/BID", allData.landusersinformation && allData.landusersinformation.LIDBID || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Name){
        bindValues('land_info_name_id',"Name", allData.landusersinformation && allData.landusersinformation.Name || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.NIC){
        bindValues('land_info_nic_id',"NIC", allData.landusersinformation && allData.landusersinformation.NIC || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Telephone){
        bindValues('land_info_tp_id',"Telephone", allData.landusersinformation && allData.landusersinformation.Telephone || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Noofdependents){
        bindValues('land_info_independ_id',"No. Of Independent", allData.landusersinformation && allData.landusersinformation.Noofdependents || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Gender){
        bindValues('land_info_gender_id',"Gender", allData.landusersinformation && allData.landusersinformation.Gender || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Occupation){
        bindValues('land_info_occupation_id',"Occupation", allData.landusersinformation && allData.landusersinformation.Occupation || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Education){
        bindValues('land_info_edu_id',"Education", allData.landusersinformation && allData.landusersinformation.Education || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Religion){
        bindValues('land_info_religion_id',"Religion", allData.landusersinformation && allData.landusersinformation.Religion || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.Race){
        bindValues('land_info_race_id',"Race", allData.landusersinformation && allData.landusersinformation.Race || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.MarriedStatus){
        bindValues('land_info_married_id',"Married Status", allData.landusersinformation && allData.landusersinformation.MarriedStatus || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.DifferentlyAbled){
        bindValues('land_info_diff_id',"Differently Abled", allData.landusersinformation && allData.landusersinformation.DifferentlyAbled || 'N/A');
    //   }

    //   if(allData.landusersinformation && allData.landusersinformation.HealthStatus){
        bindValues('land_info_health_id',"Health Status", allData.landusersinformation && allData.landusersinformation.HealthStatus || 'N/A');
    //   }

    //   if(allData.approvalstatus && allData.approvalstatus.PlanNo){
        bindValues('survey_plan_no_id',"Plan No", allData.approvalstatus && allData.approvalstatus.PlanNo || 'N/A');
    //   }

    //   if(allData.approvalstatus && allData.approvalstatus.Dateofacceptance){
        bindValues('survey_plan_accept_id',"Date of Acceptance", allData.approvalstatus && allData.approvalstatus.Dateofacceptance || 'N/A');
    //   }

    //   if(allData.approvalstatus && allData.approvalstatus.surveyorsname){
        bindValues('survey_plan_sur_name_id',"Surveyor's Name", allData.approvalstatus && allData.approvalstatus.surveyorsname || 'N/A');
    //   }

    //   if(allData.approvalstatus && allData.approvalstatus.planapprovalstatus){
        bindValues('survey_plan_approval_id',"Plan Approval Status", allData.approvalstatus && allData.approvalstatus.planapprovalstatus || 'N/A');
    //   }

    //   if(allData.surveydatasource && allData.surveydatasource.ReferenceSourceType){
        bindValues('survey_data_ref_id',"Reference Source Type", allData.surveydatasource && allData.surveydatasource.ReferenceSourceType|| 'N/A');
    //   }

    //   if(allData.surveydatasource && allData.surveydatasource.MeasurementType){
        bindValues('survey_data_mesure_id',"Measurement Type", allData.surveydatasource && allData.surveydatasource.MeasurementType|| 'N/A');
    //   }

    //   if(allData.surveydatasource && allData.surveydatasource.SurveyProcedure){
        bindValues('survey_data_procedure_id',"Survey Procedure", allData.surveydatasource && allData.surveydatasource.SurveyProcedure|| 'N/A');
    //   }

    //   if(allData.surveydatasource && allData.surveydatasource.DocumentReference){
        bindValues('survey_data_doc_ref_id',"Document Reference", allData.surveydatasource && allData.surveydatasource.DocumentReference|| 'N/A');
    //   }

    //   if(allData.surveydatasource && allData.surveydatasource.AuthorizedPersonNIC){
        bindValues('survey_data_auth_person_id',"Authorized Person NIC", allData.surveydatasource && allData.surveydatasource.AuthorizedPersonNIC|| 'N/A');
    //   }

    //   if(allData.assessmentstatus && allData.assessmentstatus.AnnualValue){
        bindValues('assessment_rate_annual_id',"Annual Value", allData.assessmentstatus && allData.assessmentstatus.AnnualValue|| 'N/A');
    //   }

    //   if(allData.assessmentstatus && allData.assessmentstatus.AssessmentNo){
        bindValues('assessment_assessment_no_id',"Assessment No ", allData.assessmentstatus && allData.assessmentstatus.AssessmentNo|| 'N/A');
    //   }

    //   if(allData.assessmentstatus && allData.assessmentstatus.Percentage){
        bindValues('assessment_percentage_id',"Percentage", allData.assessmentstatus && allData.assessmentstatus.Percentage|| 'N/A');
    //   }

    //   if(allData.assessmentstatus && allData.assessmentstatus.AnnualAssessmentfee){
        bindValues('assessment_annual_assessment_id',"Annual Assessment Fee", allData.assessmentstatus && allData.assessmentstatus.AnnualAssessmentfee|| 'N/A');
    //   }

    //   if(allData.assessmentstatus && allData.assessmentstatus.dateofvaluation){
        bindValues('assessment_date_valuation_id',"Date Of Valuation", allData.assessmentstatus && allData.assessmentstatus.dateofvaluation|| 'N/A');
    //   }


    //   if(allData.assessmentstatus && allData.assessmentstatus.property_type){
        bindValues('assessment_property_type_id',"Property Type", allData.assessmentstatus && allData.assessmentstatus.property_type|| 'N/A');
    //   }

    //   if(allData.assessmentstatus && allData.assessmentstatus.AssessmentNo){
        bindValues('license_assessment_id',"Assessment No ", allData.assessmentstatus && allData.assessmentstatus.AssessmentNo|| 'N/A');
    //   }

    //   if(allData.licensefees && allData.licensefees.LicenseCategory){
        bindValues('license_category_id',"Licenses Category", allData.licensefees && allData.licensefees.LicenseCategory|| 'N/A');
    //   }

    //   if(allData.licensefees && allData.licensefees.AnnualValue){
        bindValues('license_annually_val_id',"Annual Value", allData.licensefees && allData.licensefees.AnnualValue|| 'N/A');
    //   }

    //   if(allData.licensefees && allData.licensefees.LicenseFee){
        bindValues('license_fee_id',"Licenses Fee", allData.licensefees && allData.licensefees.LicenseFee|| 'N/A');
    //   }
      
    //   if(allData.taxation && allData.taxation.AnnualValue){
        bindValues('taxation_annual_val_id',"Annual Value", allData.taxation && allData.taxation.AnnualValue|| 'N/A');
    //   }

    //   if(allData.taxation && allData.taxation.TaxDate){
        bindValues('taxation_date_id',"Tax Date", allData.taxation && allData.taxation.TaxDate|| 'N/A');
    //   }

    //   if(allData.taxation && allData.taxation.TaxType){
        bindValues('taxation_type_id',"Tax Type", allData.taxation && allData.taxation.TaxType|| 'N/A');
    //   }

    //   if(allData.taxation && allData.taxation.Amount){
        bindValues('taxation_amount_id',"Amount", allData.taxation && allData.taxation.Amount|| 'N/A');
    //   }
}